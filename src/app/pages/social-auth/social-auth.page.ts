import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-social-auth',
  templateUrl: './social-auth.page.html',
  styleUrls: ['./social-auth.page.scss'],
})
export class SocialAuthPage implements OnInit {

  constructor(private googlePlus: GooglePlus, private fb: Facebook) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.googlePlus.login({})
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

  loginWithFacebook() {
    this.fb.login(['public_profile', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
  }


}
