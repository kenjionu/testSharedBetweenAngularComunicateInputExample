import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsstatusComponent } from './docsstatus/docsstatus.component';

const routes: Routes = [
  {
    path: '',
    component: DocsstatusComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
