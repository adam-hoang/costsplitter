import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  gnameError = "";
  @Input() editGroup: any;
  @Output() sendBoolToParent = new EventEmitter();
  originalName ="";

  constructor(
    private _httpService: HttpService,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.editGroup = this.data.editGroup
    this.originalName = this.editGroup.gname;
  }

  updateGroup(id, group){
    if (group.gname.length < 3) {
      this.gnameError = "Name must be at least 3 characters"
    }
    else {
      var newdate = String(new Date());
      newdate = newdate.substring(0,24);
      this.editGroup.journal.push("Updated Group Name from " +this.originalName+ " to " +group.gname+ " @ " +newdate)
      let observable = this._httpService.updateGroup(id, group);
      observable.subscribe(data => {
        console.log("Edited group", data);
        this.dialogRef.close();
      });
    }
  }
  cancelEditGroup(){
    this.dialogRef.close();
  }
}
