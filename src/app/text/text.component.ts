import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
second=0;
  constructor(){
    setInterval(()=> {
    this.second+=1;
    },1000)
  }
}
