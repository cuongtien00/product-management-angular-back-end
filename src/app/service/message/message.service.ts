import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../../model/Message";
import {TokenService} from "../token.service";
const API_URL = `${environment.API_LOCAL}`;
@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }


 // @ts-ignore
  getAllMessage(): Observable<Message[]> {
    let roomId = this.tokenService.getRoomId()
      return this.http.get<Message[]>(`${API_URL}messages/`+roomId);
  }
}
