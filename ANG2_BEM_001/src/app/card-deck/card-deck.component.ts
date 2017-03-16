import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-card-deck',
  inputs: [ "avatarUrl", "name", "title" ],
  changeDetection: ChangeDetectionStrategy.OnPush,  
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.css']
})
export class CardDeckComponent implements OnInit {

  public avatarUrl: string;
  public name: string;
  public title: string;

  constructor() { 
    this.avatarUrl = "";
    this.name = "";
    this.title = "";
  }

  ngOnInit() {
  }

}
