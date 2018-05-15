import { StudentsPage } from '../students/students';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {FirebaseProvider} from 'angular-firebase';
import{Camera,CameraOptions} from '@ionic-native/camera';
//import * as firebase from 'angular-firebase';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
MyData:string;
  Gender:string;FullName:string;Password:string;BirthOfDate:string;Faculty:string;ImgBytes:any;
  MyCameraOptions:CameraOptions={
    quality: 100,
    destinationType: this.MyCamera.DestinationType.DATA_URL,
    encodingType: this.MyCamera.EncodingType.JPEG,
    mediaType: this.MyCamera.MediaType.PICTURE}

    MyUsers;
    constructor(public navCtrl: NavController,public MyCamera : Camera, public MyDB:FirebaseProvider) {
      this.MyUsers={};
  }

        onRegisterClick(){


          this.MyUsers={
            FullName:this.FullName,
            Gender:this.Gender,
            Faculty:this.Faculty
          };
          debugger;
          this.MyDB.pushData('Users',this.MyUsers).
          then((v)=>{
            if(v==='success'){
              debugger;
              console.log("Sucess");
              console.log(v); 
              this.navCtrl.push(StudentsPage);
  
                
            } else {
            console.log(v); //show error
            }
          }).catch((reason)=>{

            console.log("reason:"+reason);
          });
          //this.MyUsersList.query


      

      }

      getPicture(){

        this.MyCamera.getPicture(this.MyCameraOptions).then((ImgData)=>{


        this.ImgBytes = 'data:image/jpeg;base64,' + ImgData;
        //You can send it to Backend to create file in server and save path to DB
      }, (err) => {
      // Handle error
      });


      }


}