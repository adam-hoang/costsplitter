import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { EventComponent } from './event/event.component';
import { UserComponent } from './user/user.component';
import { JournalComponent } from './journal/journal.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', pathMatch:'full', component: HomeComponent },
  { path: 'group/:id',component: GroupComponent },
  { path: 'group/:id/event/:eid',component: EventComponent },
  { path: 'group/:id/user/:uid',component: UserComponent },
  { path: 'group/:id/journal',component: JournalComponent },
  { path: 'about',component: AboutComponent },
  { path: '**', redirectTo:  '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
