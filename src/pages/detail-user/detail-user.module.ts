import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailUserPage } from './detail-user';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    DetailUserPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailUserPage),
    PipesModule
  ],
})
export class DetailUserPageModule {}
