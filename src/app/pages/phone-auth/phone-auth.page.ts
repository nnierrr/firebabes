import { Component, OnInit } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';


@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.page.html',
  styleUrls: ['./phone-auth.page.scss'],
})
export class PhoneAuthPage implements OnInit {
  verificationId: any;
  phoneNumber: any;
  code: string = "";

  constructor(public firebaseAuthentication: FirebaseAuthentication) { }

  ngOnInit() {
    
  }

  sendOTP() {
    console.log('SEND OTP REQUEST');
    this.firebaseAuthentication.verifyPhoneNumber(this.phoneNumber, 3000).then(verificationId => {
      this.verificationId = verificationId;
      console.log(verificationId);
    }).catch(error => {
      console.log('ERROR MESSAGE ',error);
    })
  }

  verifyTOP() {
    this.firebaseAuthentication.signInWithVerificationId(this.verificationId, this.code).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  }

  signOut() {
    this.firebaseAuthentication.signOut();
  }

  getCurrentUserToken() {
    console.log(this.firebaseAuthentication.getIdToken);
  }
}


