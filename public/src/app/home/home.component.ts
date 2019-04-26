import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AddGroupComponent } from '../add-group/add-group.component';
import { MatDialog } from '@angular/material';
import { DeleteGroupComponent } from '../delete-group/delete-group.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  groupList = [];
  groupModel = {gname:"",journal:[]};
  errors = {};

  constructor(
    private _httpService:HttpService,
    public dialog: MatDialog

  ) { }

  ngOnInit() {
    this.getGroupList();
  }
  getGroupList(): void{
    let observable = this._httpService.getGroupList();
    observable.subscribe(data => {
      console.log("Got our groups!", data);
      this.groupList = data['groups'];
    });
  }
  showAddGroup(): void {
    const dialogRef = this.dialog.open(AddGroupComponent, {
      data: {
        groupModel: this.groupModel,
        errors: this.errors
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.groupModel = {gname:"", journal:[]};
      this.errors = {};
      this.getGroupList();
    });
  }
  deleteGroup(x): void {
    const dialogRef = this.dialog.open(DeleteGroupComponent, {
      data: {
        x: x,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getGroupList();
    });
  }
}