import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvidersUsersProvider } from '../../providers/providers-users/providers-users';
import { User } from '../../interfaces/interface.user';

/**
 * Generated class for the DetailUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-user',
  templateUrl: 'detail-user.html',
})
export class DetailUserPage {
 users:User;
 object:any;
 id:number; 
   

  constructor(public navCtrl: NavController, public navParams: NavParams, public providerUser: ProvidersUsersProvider ) {
    this.id = this.navParams.get("id");
    this.providerUser.detailUser(this.id).subscribe(
      (data)=>{this.object = data;
              this.users = {
                id: this.object.data.id,
                avatar: this.object.data.avatar,
                first_name: this.object.data.first_name,
                last_name: this.object.data.last_name,
                email: this.object.data.email
              }
              console.log(this.users)},
      (error)=>{console.log(error)}
      );
  }

  ionViewDidLoad() {
 
    console.log('ionViewDidLoad DetailUserPage');
  }

}
