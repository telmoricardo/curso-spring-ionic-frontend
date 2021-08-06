import { Component } from '@angular/core';

import { IonicPage, NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = { 
    email : "",
    senha : ""
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  public login(){
    console.log(this.creds);
    
    this.navCtrl.setRoot('CategoriasPage');
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

}
