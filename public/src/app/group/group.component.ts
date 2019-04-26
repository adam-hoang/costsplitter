import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EditComponent } from '../edit/edit.component';
import { AddEventComponent } from '../add-event/add-event.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { DeleteGroupComponent } from '../delete-group/delete-group.component';
import { DeleteEventComponent } from '../delete-event/delete-event.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  group: any;
  eventModel = { title: "", total: "", date:"", note:"", participants: [] }
  userModel = { name: "" }
  participantID:String;
  participantModel = { paid: null, participantID: null};
  groupTotal = 0;
  userD = {};
  userA = [];
  errors ={};
  paidError = "";
  suggestedPayer = {name:"", bal:null};
  newEventWithJournal = {event:{}, journal:""}
  newUserWithJournal = {user:{}, journal:""}

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.group = { events: [], users: [] }
    this.getGroup();
  }
  getGroup() {
    let observable = this._httpService.getGroup(this._route.snapshot.params.id);
    observable.subscribe(data => {
      this.groupTotal = 0;
      this.group = data['group']
      this.group.events.sort(this.dynamicSort("title"));
      this.group.users.sort(this.dynamicSort("name"));
      this.userA = [];
      this.userD = {};
      this.participantModel = {paid: null, participantID: null}
      if (this.group.users.length > 0) {
        this.participantID = this.group.users[0]._id;
      };
      for (var i = 0; i < this.group.events.length; i++){
        this.groupTotal += this.group.events[i].total 
      };
      for(var i = 0; i < this.group.users.length;i++){
        this.userD[this.group.users[i]._id] = {name:this.group.users[i].name, bal:0, _id:this.group.users[i]._id}
      }
      for(var i = 0; i < this.group.events.length;i++){
        for(var j = 0; j < this.group.events[i].participants.length;j++){
          this.userD[this.group.events[i].participants[j]._id]['bal'] += this.group.events[i].participants[j].balance;
        }
      }
      for(var key in this.userD){
        this.userA.push(this.userD[key])
      }
      if (this.userA) {
        this.suggestedPayer = this.userA[0];
        for (var k = 1; k < this.userA.length; k++) {
          if (this.userA[k].bal < this.suggestedPayer.bal) {
            this.suggestedPayer = this.userA[k]
          }
        }
      }      
    })
  }
  showEdit(): void {
    const dialogRef = this.dialog.open(EditComponent, {
      data:{id:this._route.snapshot.params.id, editGroup:this.group}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getGroup();
    });
  }
  showAddEventForm(): void {
    const dialogRef = this.dialog.open(AddEventComponent, {
      data: {
        id: this._route.snapshot.params.id,
        group: this.group,
        participantID: this.participantID,
        eventModel: this.eventModel,
        participantModel: this.participantModel,
        newEventWithJournal: this.newEventWithJournal,
        errors: this.errors,
        paidError: this.paidError
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.eventModel = { title: "", total: "", date:"", note:"", participants: [] };
    this.participantModel = { paid: null, participantID: null};
    this.paidError = "";
    this.errors = "";
    this.getGroup();
    });
  }
  showAddUserForm(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {
        id: this._route.snapshot.params.id,
        userModel: this.userModel,
        newUserWithJournal: this.newUserWithJournal,
        errors: this.errors
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.userModel.name = "";
      this.errors ="";
      this.getGroup();
    });
  }
  deleteGroup(): void {
    const dialogRef = this.dialog.open(DeleteGroupComponent, {
      data: {
        x: this.group,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getGroup();
    });
  }
  deleteEvent(x): void {
    const dialogRef = this.dialog.open(DeleteEventComponent, {
      data: {
        x: x,
        group: this.group
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteUser(x): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: {
        x: x,
        group: this.group
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getGroup();
    });
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }
}