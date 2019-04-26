import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  group: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.group = { events: [], users: [] }
    this.getGroup();
  }
  getGroup() {
    let observable = this._httpService.getGroup(this._route.snapshot.params.id);
    observable.subscribe(data => {
      this.group = data['group']
    })
  }
}
