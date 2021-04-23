import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  maxRows:number=3;
  CardsList = [];
  Activeindex: number = 0;
  constructor() { }
  @HostListener('document:keydown', ['$event']) // listenter
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode == 40)
      this.onPrevNxtClick('PREV');
    else if (event.keyCode == 38)
      this.onPrevNxtClick('NXT');
  }

  ngOnInit(): void {
    this.configureCardList(this.maxRows);
  }
  configureCardList=(maxRows:number)=>{
   if(!maxRows)
    maxRows=3;
    this.CardsList=[];
    let maxLength=maxRows*3;
    for(var i=0;i<maxLength;i++)
    this.CardsList.push(i+1);
  }
  onPrevNxtClick = (type: string) => {
    if (type === 'PREV')
    if(this.Activeindex==0)
    this.Activeindex=this.CardsList.length-1;
    else
      this.Activeindex = this.Activeindex - 1;
    else if (type === 'NXT')
    {
      if(this.Activeindex===this.CardsList.length-1)
      this.Activeindex=0;
      else
      this.Activeindex = this.Activeindex + 1;
    }
  }
  SelectCard(index: number) {
    this.Activeindex = index;
  }
}
