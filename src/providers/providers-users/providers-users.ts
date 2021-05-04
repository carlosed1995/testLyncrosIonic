import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 


/*
  Generated class for the ProvidersUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersUsersProvider {
  public url = "https://reqres.in/api"; 
  
  constructor(public http: HttpClient) { 
  }

  listUsers(){
   return this.http.get(this.url+'/users');
  }

  detailUser(id){
   return this.http.get(this.url+'/users/'+id);
  }

  getUsers(page) {
    return this.http.get(this.url+"/users?page="+page);
  }

}
