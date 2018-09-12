import { RegisterPage } from '../register/register';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl.push(RegisterPage);

  }

}
/*

import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fileUrl: string;
  constructor(public navCtrl: NavController, private platForm: Platform, private fileTransfer: FileTransfer, private file: File, private documentViewer: DocumentViewer) {

    this.fileUrl = "https://drive.google.com/open?id=0B53Ddz2nxL_8Q1hCamI1RVhqNjg";
  }


  downloadPdf() {

    let path = '';

    if (this.platForm.is('ios') || this.platForm.is('ipad')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.dataDirectory;
    }

    let transfer = this.fileTransfer.create();
    transfer.download(this.fileUrl, path + 'newFile.pdf').then(entry => {
      let URL = entry.toURL();
      this.documentViewer.viewDocument(URL, 'application/pdf', {});
    }, error => {

      console.log(error);

    });
  }

  openPdf() {


    const options: DocumentViewerOptions = {
      title: 'Your PDF '
    }
    this.documentViewer.viewDocument('assets/css_tutorial.pdf', 'application/pdf', options);

  }
}
*/
