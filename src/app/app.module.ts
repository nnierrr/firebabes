import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { AngularFireModule } from "@angular/fire";
import {
    AngularFirestoreModule,
    FirestoreSettingsToken
} from "@angular/fire/firestore";
import { environment } from "src/environments/environment";

import { FirebaseAuthentication } from "@ionic-native/firebase-authentication/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { Facebook } from "@ionic-native/facebook/ngx";

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: FirestoreSettingsToken, useValue: {} },
        FirebaseAuthentication,
        GooglePlus,
        Facebook
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
