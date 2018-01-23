import { Component, OnInit } from '@angular/core';

export class EventModel {
  id: number;
  name: string;
}

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent implements OnInit {
  events: EventModel[];
  constructor() {
    console.log('megjött a console');
    this.events = [
      {
        id: 1,
        name: 'Sziget'
      },
      {
        id: 2,
        name: 'Fezen'
      },
      {
        id: 3,
        name: 'Rockmaraton'
      },
      {
        id: 4,
        name: 'Volt'
      }
      ];
  }

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }
  ngOnInit() {
  }

}
