import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.css']
})
export class OverzichtComponent implements OnInit {
  selected
  DataFromServer = [{ "username": "R", "date_send": "2020/5/15", "platform": "Facebook" }, { "username": "L", "date_send": "2020/5/15", "platform": "Facebook" }, { "username": "A", "date_send": "2020/5/15", "platform": "Facebook" } ]

  constructor() { }

  ngOnInit() {
  }

}
