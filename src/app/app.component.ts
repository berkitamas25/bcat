import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  events = ['Sziget', 'Volt', 'Efott', 'Szin'];
  show = true;
  loginNev = 'Berki Tamás';

  toggle() {
    this.show = !this.show;
  }
  demo(ev: MouseEvent) {
    console.log(ev);
  }
}
