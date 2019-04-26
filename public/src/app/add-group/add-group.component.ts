import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  groupModel: any;
  errors: any;

  constructor(
    private _httpService: HttpService,
    public dialogRef: MatDialogRef<AddGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.groupModel = this.data.groupModel;
    this.errors = this.data.errors;
  }
  addGroup(){
    var newdate = String(new Date());
    newdate = newdate.substring(0,24);
    this.groupModel.journal.push("Added Group: " +this.groupModel.gname+ " @ " +newdate)
    let observable = this._httpService.addGroup(this.groupModel);
    observable.subscribe(data => {
      if(data['errors']) {
        console.log("There were errors, could not add group!")
        this.errors = data['errors'];
      }
      else {
        console.log("Added group!", data);
        this.dialogRef.close();
      }
    });
  }
  cancelAddGroup() {
    this.dialogRef.close();
  }
}