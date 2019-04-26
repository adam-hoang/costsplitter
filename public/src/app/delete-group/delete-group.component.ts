import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-group',
  templateUrl: './delete-group.component.html',
  styleUrls: ['./delete-group.component.css']
})
export class DeleteGroupComponent implements OnInit {

  constructor(
    private _httpService:HttpService,
    private _router:Router,
    public dialogRef: MatDialogRef<DeleteGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
    ) { }

  ngOnInit() {
  }
  deleteGroup() {
    let observable = this._httpService.deleteGroup(this.data.x._id);
    observable.subscribe(data => {
      console.log("Removed Group!", data);
      this.dialogRef.close();
      this._router.navigate(['/'])
    });
  }
  cancelDelete() {
    this.dialogRef.close();
  }
}
