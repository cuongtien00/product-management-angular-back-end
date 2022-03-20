export class Message{
  id: number;
  content: string;
  status: number;
  sender: any;
  roomId:number;
  time: any


  constructor(id: number, content: string, status: number, sender: any, roomId: number, time: any) {
    this.id = id;
    this.content = content;
    this.status = status;
    this.sender = sender;
    this.roomId = roomId;
    this.time = time;
  }
}
