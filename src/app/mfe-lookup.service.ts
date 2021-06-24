import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';

import { APP_ROUTES } from './app-routing.module'

import { Routes } from '@angular/router';
import { HttpService } from 'mfecommon';

export type Microfrontend = LoadRemoteModuleOptions & {
  ngModuleName: string;
  displayName: string;
  routePath: string;
}

@Injectable({
  providedIn: 'root'
})
export class MfeLookupService {

  constructor(private http: HttpService) { }

  public async lookup(): Promise<Microfrontend[]> {
    const resp = await this.http.GET('pages').toPromise()
    return resp.body.routes
  }

  public buildRoutes(options: Microfrontend[]): Routes {

    const lazyRoutes: Routes = options.map(o => ({
        path: o.routePath,
        loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
    }));

    return [...APP_ROUTES, ...lazyRoutes];
  }}
