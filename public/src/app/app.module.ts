import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { GroupComponent } from './group/group.component';
import { EventComponent } from './event/event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { UserComponent } from './user/user.component';
import { JournalComponent } from './journal/journal.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatDialogModule} from '@angular/material';
import { AddPartComponent } from './add-part/add-part.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteGroupComponent } from './delete-group/delete-group.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DeletePartComponent } from './delete-part/delete-part.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    GroupComponent,
    EventComponent,
    EditEventComponent,
    UserComponent,
    JournalComponent,
    AboutComponent,
    AddPartComponent,
    AddGroupComponent,
    AddEventComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteGroupComponent,
    DeleteEventComponent,
    DeleteUserComponent,
    DeletePartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [
    EditEventComponent,
    AddPartComponent,
    EditComponent,
    AddEventComponent,
    AddUserComponent,
    AddGroupComponent,
    EditUserComponent,
    DeleteGroupComponent,
    DeleteEventComponent,
    DeleteUserComponent,
    DeletePartComponent
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
