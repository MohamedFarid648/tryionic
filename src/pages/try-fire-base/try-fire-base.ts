import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from 'angular-firebase';
//import * as firebase from 'angular-firebase';
/**
 * Generated class for the TryFireBasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-try-fire-base',
  templateUrl: 'try-fire-base.html',
})
export class TryFireBasePage {
users=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TryFireBasePage');
debugger;
    this.fb.getDataArr('Users', this.users,'value',{limitToFirst:2}).then((v)=>{
      console.log(this.users)
    });
    this.fb.pushData('Users',{'Name':'Ahmed2','ID':'Ali2'}).then((v)=>{
      if(v==='success'){
        console.log("Sucess");
        console.log(v); 
          
      } else {
       console.log(v); //show error
      }
    });
  
  }

}
