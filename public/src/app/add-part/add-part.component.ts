import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css']
})
export class AddPartComponent implements OnInit {
  partModel: any;
  paidError: any;
  group: any;
  event: any;
  addPartWithJournal: any;
  availableUsers: any;

  constructor(
    private _httpService: HttpService,
    public dialogRef: MatDialogRef<AddPartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.partModel = this.data.partModel;
    this.paidError = this.data.paidError;
    this.group = this.data.addPartWithJournal.group;
    this.event = this.data.event;
    this.addPartWithJournal = this.data.addPartWithJournal;
    this.availableUsers = this.data.availableUsers;
  }
  addPart() {
    if (this.partModel.paid < 0) {
      this.paidError = "Paid must be greater than $0";
    }
    else {
      for(var i = 0; i < this.group.users.length;i++){
        if(this.partModel._id == this.group.users[i]._id){
          this.partModel.name = this.group.users[i].name;
        }
      }
      // recalculates the event.split
      this.event.split = Math.round((this.event.total / (this.event.participants.length+1))*100) / 100;
      // pushes model into event.participant array
      this.event.participants.push(this.partModel);
      // calculates balance for each participant
      for (var i=0; i<this.event.participants.length;i++){
        this.event.participants[i].balance = Math.round((this.event.participants[i].paid - this.event.split)*100) / 100;
      }
      var newdate = String(new Date());
      newdate = newdate.substring(0,24);
      this.addPartWithJournal.journal = "Added " +this.partModel.name+ " to the " +this.event.title+ " event @ " +newdate;
      this.addPartWithJournal.event = this.event;
      this.addPartWithJournal.group = this.group;
      let observable = this._httpService.addPart(this.data.id, this.addPartWithJournal);
      observable.subscribe(data => {
        console.log("Updated event!", data);
        this.dialogRef.close();
      });
    }
  }
  cancelAdd(){
    this.dialogRef.close();
  }
}
