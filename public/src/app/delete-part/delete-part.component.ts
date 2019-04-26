import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-delete-part',
  templateUrl: './delete-part.component.html',
  styleUrls: ['./delete-part.component.css']
})
export class DeletePartComponent implements OnInit {
  group: any;
  event: any;
  deletePartName: any;
  groupAndEvent: any

  constructor(
    private _httpService:HttpService,
    public dialogRef: MatDialogRef<DeletePartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.group = this.data.group;
    this.event = this.data.event;
    this.deletePartName = this.data.deletePartName;
    this.groupAndEvent = this.data.groupAndEvent
  }
  deletePart() {
    // recalculates the event.split for one less person
    this.event.split = Math.round((this.event.total / (this.event.participants.length-1))*100) / 100;
    // removes the participant from the event array
    var x = this.event.participants;
    for (var i = 0; i < x.length; i++){
      if(x[i]._id == this.data.pid){
        var temp = x[i];
        x[i] = x[x.length - 1]
        x[x.length - 1] = temp;
        this.deletePartName = x[x.length - 1].name;
        x.pop();
      }
    }
    // recalculates balance for each participant
    for (var i = 0; i < this.event.participants.length; i++){
      this.event.participants[i].balance = Math.round((this.event.participants[i].paid - this.event.split)*100) / 100;
    }
    
    var y = this.group.events;
    for(var i = 0; i < y.length; i++){
      if(y[i]._id == this.event._id){
        var temp = y[i];
        y[i] = y[y.length - 1]
        y[y.length - 1] = temp;
        y.pop();
        //event removed and new one being pushed back into the original spot.
        y.push(this.event);
        temp = y[i]
        y[i] = y[y.length - 1]
        y[y.length - 1] = temp;
      }
    }
    var newdate = String(new Date());
    newdate = newdate.substring(0,24);
    this.group.journal.push("Removed " +this.deletePartName+ " from the " +this.event.title+ " event @ " +newdate);
    this.groupAndEvent.event = this.event;
    this.groupAndEvent.group = this.group;
    let observable = this._httpService.deletePart(this.data.id, this.groupAndEvent);
    observable.subscribe(data => {
      console.log("Removed participant from event!", data);
      this.dialogRef.close();
    })
  }
  cancelDelete() {
    this.dialogRef.close();
  }
}