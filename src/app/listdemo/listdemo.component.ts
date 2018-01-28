import { Component, OnInit } from '@angular/core';
import {EventModel} from './event-model';



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
        name: 'Sziget',
        pic: 'https://szifon.com/wp-content/uploads/2014/08/logo-2.png'
      },
      {
        id: 2,
        name: 'Fezen',
        pic: 'http://mafsz.org/wp-content/uploads/2014/05/fezen.png'
      },
      {
        id: 3,
        name: 'Rockmaraton',
        pic: 'http://www.rastafest.hu/fest/rockmaraton/rockmaraton_logo.jpg'
      },
      {
        id: 4,
        name: 'Volt',
        pic: 'http://m.blog.hu/b-/b-oldal/image/volt20.jpg'
      }
      ];
  }
  add(newEventNameInput) {
    this.events = [...this.events, new EventModel(5, newEventNameInput.value)];
    newEventNameInput.value = '';
  }
  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }
  ngOnInit() {
  }

}
