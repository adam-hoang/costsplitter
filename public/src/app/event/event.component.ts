import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EditEventComponent } from '../edit-event/edit-event.component';
import { AddPartComponent } from '../add-part/add-part.component';
import { DeletePartComponent } from '../delete-part/delete-part.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  group: any;
  event: any;
  partModel = {name:"", paid:0, balance:0, _id:""};
  user: any;
  groupAndEvent = {group:{}, event:{}}
  availableUsers: any;
  prettyDate = "";
  noAvailUsers = false;
  paidError ="";
  addPartWithJournal = {group: {}, event:{}, journal:""}
  deletePartName ="";
  data: any;

  constructor(
    private _httpService:HttpService,
    private _route:ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.group = {gname: "", users: [], events: []};
    this.event = {title:"", participants:[], total: 0, split: 0, note: "", date:""}
    this.partModel = {name:"", paid:0, balance:0, _id:""};
    this.prettyDate = "";
    this.getGroup();
  }

  showAdd(): void {
    const dialogRef = this.dialog.open(AddPartComponent, {
      data:{
        id: this._route.snapshot.params.id,
        paidError: this.paidError,
        partModel: this.partModel,
        group: this.group,
        event: this.event,
        addPartWithJournal: this.addPartWithJournal,
        availableUsers: this.availableUsers
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getGroup();
    });
  }
  showEdit(): void {
    const dialogRef = this.dialog.open(EditEventComponent, {
      data:{id:this._route.snapshot.params.id, editEvent:this.event}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getEvent();
    });
  }
  getGroup(){
    let observable = this._httpService.getGroup(this._route.snapshot.params.id);
    observable.subscribe(data => { 
      this.group = data['group']
      console.log("Got group", data);
      this.getEvent()
    })
  }
  getEvent(){
    let observable = this._httpService.getSingleEvent(this._route.snapshot.params.eid);
    observable.subscribe(data => { 
      this.event = data['event']
      console.log("Got event", data);
      this.availableUsers = [];
      for (var i = 0; i < this.group.users.length; i++) {
        var sampleBoolean = false;
        for(var j = 0; j < this.event.participants.length; j++){
          if(this.group.users[i]._id == this.event.participants[j]._id){
            sampleBoolean = true;
          }
        }
        if(sampleBoolean == false){
          this.availableUsers.push(this.group.users[i]);
        }
      }
      if (this.availableUsers.length < 1) {
        this.availableUsers = [{name: ""}];
        this.noAvailUsers = true;
      }
      this.partModel = {name: this.availableUsers[0].name , paid: null, balance:0, _id:this.availableUsers[0]._id};
      this.prettyDate = this._httpService.prettyDate  (this.event.date)
      this.addPartWithJournal.event = this.event;
      this.addPartWithJournal.group = this.group;
    })
  }
  deletePart(x): void {
    const dialogRef = this.dialog.open(DeletePartComponent, {
      data:{
        id: this._route.snapshot.params.id,
        pid: x._id,
        name: x.name,
        group: this.group,
        event: this.event,
        deletePartName: this.deletePartName,
        groupAndEvent: this.groupAndEvent,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getGroup();
      this.noAvailUsers = false;
    });
  }
}