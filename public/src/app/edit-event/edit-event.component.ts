import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  editEvent: any;
  group: any;
  errors = [];
  originalEvent: any;
  
  constructor(
    private _httpService: HttpService,
    public dialogRef: MatDialogRef<EditEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit() {
    this.editEvent = this.data.editEvent;
    this.getGroup();
  }
  getGroup(){
    let observable = this._httpService.getGroup(this.data.id);
    observable.subscribe(data => { 
      this.group = data['group']
      console.log("Got group", data);
      this.originalEvent = JSON.parse(JSON.stringify(this.editEvent));
    })
  }
  updateEvent(id, event){
    this.errors = [];
    if (event.title.length < 3) {
      this.errors.push("Title must be at least 3 characters")
    }
    if (event.note.length < 3) {
      this.errors.push("Note must be at least 3 characters")
    }
    if (event.total <= 0) {
      this.errors.push("Total must be greater than $0")
    }
    if (this.errors.length > 0) {
    }
    else {
      // calculates split
      event.split = Math.round((event.total / (event.participants.length))*100) / 100;
      // calculates balance for each participant
      for (var i = 0; i < event.participants.length; i++){
        event.participants[i].balance = Math.round((event.participants[i].paid - event.split)*100) / 100;
      }
      let observable = this._httpService.updateEvent(id, event);
      observable.subscribe(data => {
        console.log("Edited event", data);
        this.updateGroupAfterUpdatingEvent(event)
        this.dialogRef.close();
      });
    }
  }
  updateGroupAfterUpdatingEvent(event){
    for (var i = 0; i < this.group.events.length; i++) {
      if (this.group.events[i]._id == event._id) {
        this.group.events[i] = event;
      }
    }
    var newdate = String(new Date());
    newdate = newdate.substring(0,24);
    this.group.journal.push(
      "Updated Event: " + this.originalEvent.title +
      " for $" + this.originalEvent.total +
      " on " + this.originalEvent.date +
      " note: " + this.originalEvent.note +
      " to " + this.editEvent.title +
      " for $" + this.editEvent.total +
      " on " + this.editEvent.date +
      " note: " + this.editEvent.note +
      " @ " + newdate
    );
    let observable = this._httpService.updateGroupAfterUpdatingEvent(this.data.id, this.group);
    observable.subscribe(data => { 
      this.group = data['group']
      console.log("Got group", data);
    })
  }
  cancelEditEvent(){
    this.dialogRef.close();
  }
}