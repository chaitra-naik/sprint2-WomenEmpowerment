import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainingcourse } from '../trainingcourse';
import { TrainingcourseService } from '../trainingcourse.service';

@Component({
  selector: 'app-add-trainingcourse',
  templateUrl: './add-trainingcourse.component.html',
  styleUrls: ['./add-trainingcourse.component.css']
})
export class AddTrainingcourseComponent implements OnInit {

  trainingCourse: Trainingcourse = new Trainingcourse();
  
  constructor(private trainingCourseServ:TrainingcourseService, private route:Router) { }

  ngOnInit(): void {
  }

  saveTrainingCourse(){
    this.trainingCourseServ.addTrainingCourse(this.trainingCourse).subscribe(data => {
      console.log(data);
      this.goToTrainingCourseList();
    },
    error=>console.error(error));
  }

  goToTrainingCourseList(){
    this.route.navigate(['/trainingcourselist']);
  }

  onSubmit(){
    console.log(this.trainingCourse);
    this.saveTrainingCourse();
  }

}
