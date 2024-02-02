import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ServersComponent } from './servers/servers.component';


const routes: Routes = [
   { path: '', component: ServersComponent },
   { path: 'assignment', component: AssignmentComponent },
  // { path: 'contact', component: ContactComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
