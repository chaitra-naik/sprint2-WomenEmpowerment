import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-trainee-list',
  templateUrl: './trainee-list.component.html',
  styleUrls: ['./trainee-list.component.css']
})
export class TraineeListComponent implements OnInit {
  trainees:Trainee[]=[];

  
  constructor(private traineeserv:TraineeService, public loginServ:LoginService,
    private router:Router) { }

  ngOnInit(): void {
    this.getTrainees();
    
  }
  private getTrainees(){
    this.traineeserv.getTraineeList().subscribe(data => {
      this.trainees = data;
    })
  }
  updateTrainee(traineeId:any)
  {
     this.router.navigate(['update-trainee',traineeId])
  }
  
  deleteTrainee(traineeId:any)
  {
    this.traineeserv.deleteTrainee(traineeId).subscribe(data=>{
      console.log(data);
      this.getTrainees();
    })
  }
  
    
  }


