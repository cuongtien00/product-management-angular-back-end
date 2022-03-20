import {Component, OnInit} from '@angular/core';
import {SocketService} from "../../../service/socket/socket.service";
import {FormControl, FormGroup} from "@angular/forms";
import {TokenService} from "../../../service/token.service";
import {Message} from "../../../model/Message";

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {


  form: any = {}
// @ts-ignore
  message: Message = {}
  userName: string = '';

  constructor(
    public socketService: SocketService,
    private tokenService: TokenService
  ) {
  }
  getUserName() {
   this.userName =  this.tokenService.getName();
  }

  ngOnInit(): void {
    this.socketService.connect()
    this.getUserName()
  }

  createMessage() {
// @ts-ignore
    this.message = {
      content: this.form.content,
      status: 0,
      sender: {
        id: this.tokenService.getUserId(),
        name:this.tokenService.getName(),
      }
    }
    console.log('message: ' + this.message);
    this.socketService.createMessageUsingSocket(this.message);
    this.form = {};
  }

}
