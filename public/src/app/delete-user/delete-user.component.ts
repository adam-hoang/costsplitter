import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  group: any;

  constructor(
    private _httpService:HttpService,
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
  ) { }

  ngOnInit() {
    this.group = this.data.group;
  }
  deleteUser() {
    // pops user out of group
    for (var i = 0; i < this.group.users.length; i++) {
      if (this.group.users[i]._id == this.data.x._id) {
        var temp = this.group.users[i]
        this.group.users[i] = this.group.users[this.group.users.length - 1]
        this.group.users[this.group.users.length - 1] = temp
      }
    }
    var newdate = String(new Date());
    newdate = newdate.substring(0,24);
    this.group.journal.push("Removed User: " + this.group.users[this.group.users.length-1].name + " @ " + newdate);
    this.group.users.pop();
    // checks if there are any events
    if (this.group.events.length < 1){
      let observable = this._httpService.deleteUser(this.data.x._id, this.group);
      observable.subscribe(data => {
        console.log("Removed user!", data);
        this.dialogRef.close();
      })
    }
    else {
      //pops user out of all events in group
      for (var i = 0; i < this.group.events.length; i++) {
        for(var j = 0; j < this.group.events[i].participants.length;j++){
          if(this.group.events[i].participants[j]._id == this.data.x._id){
            var temp = this.group.events[i].participants[j]
            this.group.events[i].participants[j] = this.group.events[i].participants[this.group.events[i].participants.length - 1]
            this.group.events[i].participants[this.group.events[i].participants.length - 1] = temp
            this.group.events[i].participants.pop();
            this.group.events[i].split = Math.round((this.group.events[i].total/this.group.events[i].participants.length)*100) /100;
            //recalculates balance for each participant
            for (var k = 0; k < this.group.events[i].participants.length; k++){
              this.group.events[i].participants[k].balance = Math.round((this.group.events[i].participants[k].paid - this.group.events[i].split)*100) / 100;
            }
          }
        }
        let observable = this._httpService.deleteUser(this.data.x._id, this.group);
        observable.subscribe(data => {
          console.log("Removed user!", data);
          this.dialogRef.close();
        })
      }
    }
  }
  cancelDelete() {
    this.dialogRef.close();
  }
}