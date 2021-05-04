import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvidersUsersProvider } from '../../providers/providers-users/providers-users';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage { 
  users:any;
  data:any;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public providerUser: ProvidersUsersProvider) {
    this.getUsers();
  }

  ionViewDidLoad() {

  }

    detailUser(id){
     this.navCtrl.push("DetailUserPage", {id:id});
    }

    homePage(){
      this.navCtrl.push("HomePage");
     }

    getUsers() {
    
      this.providerUser.getUsers(this.page)
         .subscribe(
           res => {
             this.data = res;
             this.users = this.data.data;
             this.perPage = this.data.per_page;
             this.totalData = this.data.total;
             this.totalPage = this.data.total_pages;
             console.log(this.users);
           },
           error => {console.log(error)});
    }

    doInfinite(infiniteScroll) {
      this.page = this.page+1;
      setTimeout(() => {
        this.providerUser.getUsers(this.page)
           .subscribe(
             res => {
               this.data = res;
               this.perPage = this.data.per_page;
               this.totalData = this.data.total;
               this.totalPage = this.data.total_pages;
               for(let i=0; i<this.data.data.length; i++) {
                 this.users.push(this.data.data[i]);
               }
             },
             error => {console.log(error)});
     
        infiniteScroll.complete();
      }, 1000);
    }

}
