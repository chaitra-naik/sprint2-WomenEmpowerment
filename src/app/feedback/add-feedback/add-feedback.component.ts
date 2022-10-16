import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Feedback } from '../feedback';
import {FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  feedback:Feedback=new Feedback();
  feedbackform: any;
  constructor() { }

  ngOnInit(): void {
  }
  //feedbackform = this.fb.group({
    


savefeedback(){
  this.feedback.addfeedback(this.feedback).((data: any) => {
    console.log(data);
    this.feedbackform();
  },
    (  error: any)=>console.error(error));
}