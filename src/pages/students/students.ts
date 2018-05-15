import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{StudentDetailsPage} from '../student-details/student-details';
import {FirebaseProvider} from 'angular-firebase';

/**
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {
Students=[];
//items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FirebaseProvider) {
  
    this.fb.getDataArr('Users', this.Students).then((v)=>{ 
      console.log("v:"+v);
           
    }).catch((error)=>{ 
      /*
      When I didn't write catch it didn't go enter then ,and went after it , and out the constructor and the this.Students was empty
      When I wrote catch it didn't go enter then,and went after it ,but it returned to it and fill the this.Students
      */
      console.log("error:"+error);

    });
    
  }
ionViewWillEnter(){

}
  ionViewDidLoad() {
 
  }

  itemTapped(event,stu){
    debugger;
    this.navCtrl.push(StudentDetailsPage,{
      StudentITem:stu
    })
  }

}
