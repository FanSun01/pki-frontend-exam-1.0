import { Observable, Subject } from 'rxjs';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { PrivateMessage, ImportProgress } from './model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  private privateMessage: Subject<PrivateMessage>;
  private importProgress: Subject<ImportProgress>;
  private connection: signalR.HubConnection;

  constructor() {
    this.privateMessage = new Subject<PrivateMessage>();
    this.importProgress = new Subject<ImportProgress>();
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(environment.hubUrl)
      .build();

    this.connect();
  }

  private connect() {
    this.connection.start().catch((err) => console.log(err));
    this.connection.on('ReceivePublicMessage', (user, msg) => {
      this.privateMessage.next({ user: user, message: msg });
    });
    this.connection.on('ImportProgress', (msg1, msg2) => {
      this.importProgress.next({ msg1: msg1, msg2: msg2 });
    });
  }

  public getPrivateMessage(): Observable<PrivateMessage> {
    return this.privateMessage;
  }

  public getImportProgress(): Observable<ImportProgress> {
    return this.importProgress;
  }

  public sendPrivatMessage(user: string, message: string) {
    this.connection.invoke('SendPublicMessage', user, message);
  }

  public beginEnglishDictionaryImport() {
    this.connection.invoke('ImportEnglishDictionary');
  }

  public disconnect() {
    this.connection.stop();
  }
}
