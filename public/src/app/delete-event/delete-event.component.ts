import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {
  group: any;

  constructor(
    private _httpService:HttpService,
    public dialogRef: MatDialogRef<DeleteEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
  ) { }

  ngOnInit() {
    this.group = this.data.group;
  }
  deleteEvent() {
    for (var i = 0; i < this.group.events.length; i++) {
      if (this.group.events[i]._id == this.data.x._id) {
        var temp = this.group.events[i]
        this.group.events[i] = this.group.events[this.group.events.length - 1]
        this.group.events[this.group.events.length - 1] = temp
      }
    }
    var newdate = String(new Date());
    newdate = newdate.substring(0,24);
    this.group.journal.push("Removed Event: " + this.group.events[this.group.events.length-1].title + " @ " + newdate);
    this.group.events.pop();
    let observable = this._httpService.deleteEvent(this.data.x._id, this.group);
    observable.subscribe(data => {
      console.log("Removed Event!", data);
      this.dialogRef.close();
    });
  }
  cancelDelete() {
    this.dialogRef.close();
  }
}
