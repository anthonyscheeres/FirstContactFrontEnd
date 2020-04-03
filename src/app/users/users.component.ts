import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/UserModel";
import {UserRole} from '../models/UserRole';



/**
 * @author Valerie Timmerman
 * This class is used to control the list with all the users in it.
 */
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [{ "username": "Anthony" }, { "username": "Bram" }, { "username": "Wino" }, { "username": "Maz" }]

  ngOnInit() {
 

  }
}
