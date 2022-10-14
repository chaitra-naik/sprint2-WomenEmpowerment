import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-add-trainee',
  templateUrl: './add-trainee.component.html',
  styleUrls: ['./add-trainee.component.css']
})
export class AddTraineeComponent implements OnInit {

  trainee: Trainee = new Trainee();

  constructor(private traineeServ: TraineeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveTrainee(){
    this.traineeServ.addTrainee(this.trainee).subscribe(data => {
      console.log(data);
      this.goToTraineeList();
    },
    error=>console.error(error));
  }

  goToTraineeList(){
    this.router.navigate(['/traineelist']);
  }

  onSubmit(){
    console.log(this.trainee);
    this.saveTrainee();
  }
}
