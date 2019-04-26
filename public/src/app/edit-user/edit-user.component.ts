import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  group: any;
  user: any;
  originalName: any;
  allModelChanges: any;
  events: any;
  userError: any;

  constructor(
    private _httpService: HttpService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.group = this.data.group;
    this.user = this.data.user;
    this.originalName = this.data.originalName;
    this.allModelChanges = this.data.allModelChanges;
    this.events = this.data.events;
    this.userError = this.data.userError;
  }
  editUser() {
    // CHANGES NAME OF USER IN GROUP
    for (var i = 0; i < this.group.users.length; i++) {
      if ( this.group.users[i]._id == this.data.uid) {
        this.group.users[i].name = this.user.name
      }
    }
    // CHANGES NAME OF PARTICIPANTS IN EACH EVENT OF GROUP
    for (var i = 0; i < this.group.events.length; i++) {
      var x = this.group.events[i].participants;
      for (var j = 0; j < x.length; j++) {
        if ( x[j]._id == this.data.uid) {
          x[j].name = this.user.name;
        }
      }
    }
    var newdate = String(new Date());
    newdate = newdate.substring(0,24);
    this.group.journal.push("Edited User Name from " +this.originalName+ " to " +this.user.name+ " @ " +newdate)
    this.allModelChanges.group = this.group;
    this.allModelChanges.events = this.events;
    this.allModelChanges.user = this.user;
    if (this.user.name.length < 3) {
      this.userError = "Name must be at least 3 characters";
    }
    else {
      let observable = this._httpService.updateUser(this.data.id, this.allModelChanges);
      observable.subscribe(data => {
        this.dialogRef.close();
      })
    }
  }
  hideEditUser() {
    this.dialogRef.close();
  }
}