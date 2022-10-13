import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ngo } from '../ngo';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-update-ngo',
  templateUrl: './update-ngo.component.html',
  styleUrls: ['./update-ngo.component.css']
})
export class UpdateNgoComponent implements OnInit {
  ngoId:any;
  ngo: Ngo = new Ngo();

  constructor(private ngoServ:NgoService, private route:Router, private activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.ngoId = this.activate.snapshot.params['ngoId'];

    this.ngoServ.getNgoById(this.ngoId).subscribe((data: any) => {
      this.ngo = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.ngoServ.updateNgo(this.ngoId,this.ngo).subscribe( (data: any) =>{
      this.goToNgoList();
    }
    , (error: any) => console.log(error));
  }

  goToNgoList(){
    this.route.navigate(['/ngolist']);
  }

}
