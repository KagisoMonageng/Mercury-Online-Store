import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private account : AccountService) { }

  ngOnInit() {
    this.account.getUser().subscribe((res:any)=>{
      console.log(res)
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })
  }

}
