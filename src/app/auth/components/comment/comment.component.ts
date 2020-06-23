import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  postButton=false;

  addPost(){
    this.postButton= !this.postButton;
   /* if(!this.addPost){
      this.postButton = true;
    }
    else{
      this.postButton = false;
    }*/
  }

  closeArea(){
    this.postButton=this.postButton;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
