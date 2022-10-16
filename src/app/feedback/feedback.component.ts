import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

import { Feedback } from './feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public loginServ:LoginService) { }

  ngOnInit(): void {
  }
  
}
