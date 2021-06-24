import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'mfecommon';
import { Microfrontend, MfeLookupService } from './mfe-lookup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  public isExpanded: boolean = false;

  public microfrontends: Microfrontend[] = [];

  constructor(
    private sessionService: SessionService, 
    private router: Router,
    private lookupService: MfeLookupService,
  ) {}

  /*async ngOnInit(): Promise<void> {
    this.microfrontends = await this.lookupService.lookup();
    const routes = this.lookupService.buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);
  }*/

  public logout(): void{
    this.sessionService.logout()
  }
}
