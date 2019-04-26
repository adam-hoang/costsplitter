import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  group: any;
  participantID: any;
  eventModel: any;
  participantModel: any;
  newEventWithJournal: any;
  errors: any;
  paidError: any;

  constructor(
    private _httpService: HttpService,
    public dialogRef: MatDialogRef<AddEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.group = this.data.group,
    this.participantID = this.data.participantID,
    this.eventModel = this.data.eventModel,
    this.participantModel = this.data.participantModel,
    this.newEventWithJournal = this.data.newEventWithJournal,
    this.errors = this.data.errors,
    this.paidError = this.data.paidError
  }
  addEvent() {
    for(var i = 0; i < this.group.users.length; i++){
      if(this.group.users[i]._id == this.participantID){
        this.eventModel.participants.push(this.group.users[i]);
      }
    }
    this.paidError = "";
    this.eventModel.participants[0]['paid'] = this.participantModel.paid;
    this.eventModel.participants[0]['balance'] = this.eventModel.participants[0]['paid'] - parseInt(this.eventModel['total']);
    this.newEventWithJournal.event = this.eventModel;
    var newdate = String(new Date());
    newdate = newdate.substring(0,24);
    this.newEventWithJournal.journal = (
      "Added Event: " + this.eventModel.title +
      " for $" + this.eventModel.total +
      " on " + this._httpService.prettyDate(this.eventModel.date) +
      " note: " + this.eventModel.note +
      " (" + this.eventModel.participants[0].name +
      " paid $" + this.participantModel.paid + ") @ " + newdate
    );
    let observable = this._httpService.addEvent(this.data.id, this.newEventWithJournal);
    observable.subscribe(data => {
      if(data['errors']) {
        console.log("There were errors, could not add event!")
        this.errors = data['errors']
        if (this.participantModel.paid < 1) {
          this.paidError = "Paid must be greater than $0"
        }
      }
      else {
        console.log("Added event!", data);
        this.eventModel = { title: "", total: "", date:"", note:"", participants: [] };
        this.participantModel = {paid: null, participantID: this.group.users[0].name}
        this.dialogRef.close();
      }
    });
  }
  cancelAddEvent(){
    this.dialogRef.close();
  }
}