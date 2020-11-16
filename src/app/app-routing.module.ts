import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoReceivedComponent } from './pages/info-received/info-received.component';

const routes: Routes = [
  {
    path: '',
    
    component: InfoReceivedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
