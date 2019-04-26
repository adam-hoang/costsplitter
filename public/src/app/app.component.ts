import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditEventComponent } from './edit-event/edit-event.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    public dialog: MatDialog
  ) { }
  
  ngOnInit(){
  }
}