import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'my-app',
  template: `
      <div class="demo-layout-transparent mdl-layout mdl-js-layout">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span><a class="mdl-layout-title" [routerLink]="['/']">Crowd Routes</a></span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['/']">Home</a>
            <a class="mdl-navigation__link" [routerLink]="['/places']">Places</a>
            <a class="mdl-navigation__link" [routerLink]="['/journeys']">Journeys</a>
          </nav>
        </div>
      </header>
      <main class="mdl-layout__content">
        <h1 class="header-text">Welcome to Crowd Routes</h1>
      </main>
    </div>
    <!-- Router Outlet -->
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  // Deprecated
  // Tell component to use router directives
  // directives: [ROUTER_DIRECTIVES]
})

// App Component class
export class AppComponent{

  public constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }
}