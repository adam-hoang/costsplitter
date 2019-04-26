import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInformation = [];
  group = {gname:"", users:[], events:[], journal:[]};
  user = {name:""};
  events = [];
  userBalance = 0;
  userPaid = 0;
  userTotalCost = 0;
  showDetails = false;
  allModelChanges = { user: {}, events: {}, group:{} };
  userError = "";
  originalName = "";

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    public dialog: MatDialog

  ) { }

  ngOnInit() {
    this.getGroup();
    this.getUser();
  }
  getGroup() {
    let observable = this._httpService.getGroup(this._route.snapshot.params.id);
    observable.subscribe(data => {
      this.group = data['group'];
      for (var i = 0; i < this.group.events.length; i++) {
        var x = this.group.events[i].participants;
        for (var j = 0; j < x.length; j++) {
          if ( x[j]._id == this._route.snapshot.params.uid) {
            x[j].title = this.group.events[i].title
            x[j].split = this.group.events[i].split
            this.userInformation.push(x[j]);
            this.userBalance += x[j].balance;
            this.userPaid += x[j].paid;
            this.userTotalCost += this.group.events[i].split
          }
        }
      }
      this.events = this.group.events;
    })
  }
  getUser() {
    let observable = this._httpService.getUser(this._route.snapshot.params.uid);
    observable.subscribe(data => {
      this.user = data['user']
      this.originalName = this.user.name;
    })
  }
  showDetailsButton() {
    this.showDetails = true;
  }
  hideDetailsButton() {
    this.showDetails = false;
  }
  showEditUser(): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: {
        id:this._route.snapshot.params.id,
        uid:this._route.snapshot.params.uid,
        group:this.group,
        user: this.user,
        originalName: this.originalName,
        allModelChanges: this.allModelChanges,
        events: this.events,
        userError: this.userError,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.userInformation = [];
      this.userBalance = 0;
      this.userPaid = 0;
      this.userTotalCost = 0;
      this.userError = "";
      this.originalName = "";
      this.getGroup();
      this.getUser();
    });
  }
}