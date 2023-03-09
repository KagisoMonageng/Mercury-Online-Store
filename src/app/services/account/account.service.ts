import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'mercury-online-store-backend.vercel.app';
  constructor(private http : HttpClient ) { }

  getUser()
  {
    return this.http.get(this.baseUrl+'/account')
  }
}
