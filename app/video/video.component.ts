import { Component, OnInit } from '@angular/core';
import Peer from 'peerjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{
private peer:Peer;
peerIdShare:any;
  peerId: any;
currentPeer : any;
private peerList:Array<any>=[]
  lazyStream: any;

constructor(){
  this.peer = new Peer();
}
  ngOnInit(): void {
this. getPeerId();
  }
  private getPeerId = () => {
    //Generate unique Peer Id for establishing connection
        this.peer.on('open', (id) => {
          this.peerId = id;
          
        });
    
        this.peer.on('call', (call) => {
          navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
          }).then((stream) => {
            this.lazyStream = stream;
    
            call.answer(stream);
            call.on('stream', (remoteStream) => {
              if (!this.peerList.includes(call.peer)) {
                this.streamRemoteVideo(remoteStream);
                this.currentPeer = call.peerConnection;
                this.peerList.push(call.peer);
              }
            });
    
          }).catch(err => {
            console.log(err + 'Unable to get media');
          });
        });
}

connectWithPeer():void{
  this.callPeer(this.peerIdShare);
}

private callPeer(id: string): void {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  }).then((stream) => {
    this.lazyStream = stream;

    const call = this.peer.call(id, stream);
    call.on('stream', (remoteStream) => {
      if (!this.peerList.includes(call.peer)) {
        this.streamRemoteVideo(remoteStream);
        this.currentPeer = call.peerConnection;
        this.peerList.push(call.peer);
      }
    });
  }).catch(err => {
    console.log(err + 'Unable to connect');
  });
}
private streamRemoteVideo(stream: MediaProvider | null) {
  const video = document.createElement('video');
  video.classList.add('video');
  video.srcObject = stream;
  video.play();
}

}
