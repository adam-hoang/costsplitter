import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userModel: any;
  newUserWithJournal: any;
  errors: any

  constructor(
    private _httpService: HttpService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.userModel = this.data.userModel;
    this.newUserWithJournal = this.data.newUserWithJournal;
    this.errors = this.data.errors
  }
  addUser() {
    var newdate = String(new Date());
    newdate = newdate.substring(0,24);
    this.newUserWithJournal.user = this.userModel;
    this.newUserWithJournal.journal = "Added User: " +this.userModel.name+ " @ " +newdate;

    let observable = this._httpService.addUser(this.data.id, this.newUserWithJournal);
    observable.subscribe(data => {
      if(data['errors']) {
        console.log("There were errors, could not add user!")
        this.errors = data['errors']
      }
      else {
        console.log("Added user!", data);
        this.dialogRef.close();
      }
    });
  }
  cancelAddUser(){
    this.dialogRef.close();
  }
}
