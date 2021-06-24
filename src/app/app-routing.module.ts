import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*const routes: Routes = [
  {
    path: '',
    loadChildren: () => loadRemoteModule({
        remoteEntry: 'http://localhost:4001/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module'
      })
      .then((m: any) => m.Mfe1Module) 
  },
];*/
export const APP_ROUTES: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
