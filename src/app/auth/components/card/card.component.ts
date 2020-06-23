import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  numberOfLikes: number=110;
  BUTTON=false;

  likeButtonClicked(){
    if(!this.BUTTON){
      this.BUTTON =true;
      this.numberOfLikes++;
    }else{
      this.BUTTON =false;
      this.numberOfLikes--;
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
