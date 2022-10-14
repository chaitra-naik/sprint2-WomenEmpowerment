import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';



@Component({
  selector: 'app-update-trainee',
  templateUrl: './update-trainee.component.html',
  styleUrls: ['./update-trainee.component.css']
})
export class UpdateTraineeComponent implements OnInit {
  traineeId:any;
  trainee: Trainee = new Trainee();

  constructor(private traineeServ: TraineeService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.traineeId=this.route.snapshot.params['traineeId'];
    this.traineeServ.getTraineeById(this.traineeId).subscribe((data)=>{this.trainee=data},
    error=>console.log(error));
    
    
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



