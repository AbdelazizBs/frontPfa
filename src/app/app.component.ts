import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'MyHouse_Pfa';
  showHead: boolean = false;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/login' || event['url'] == '/registre' || event['url'] == '/acceuil' || event['url'] == '/profil' || event['url'] == '/allAnnances'  || event['url'] == '/annances' || event['url'] == '/addAnnance' ) {
            this.showHead = false;
          } else {
            // console.log("NU")
            this.showHead = true;
          }
        }
      });
    }

}



