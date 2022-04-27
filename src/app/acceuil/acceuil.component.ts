import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
export class Annance {
  id!: number;
  userId!:number;
  description!: string;
  date!: Date;
  category!: string;
  picture!: string;
}
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})


export class AcceuilComponent implements OnInit {
  invalidLogin = false;
  annanceForm : Annance;
public annance : any

successMessage = "Authentication success";
errorMessage = "Invalide username or password";
  constructor(private userService :UserServiceService,private router: Router) {
    this.annanceForm = new Annance;
   }

  ngOnInit(): void {
  }


  createAnnance() {
    this.annance={
      "description":this.annanceForm.description,
      "date":this.annanceForm.date,
      "category":this.annanceForm.category,
      "picture":this.annanceForm.picture,
      "userId":this.userService.user.id
    }

      this.router.navigate(['/acceuil'])

  }
}
