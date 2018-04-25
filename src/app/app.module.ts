import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
// comp propios

import { UploadImgesComponent } from './upload-imges/upload-imges.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image/image.component';

//services
import {ImageService} from './services/image.service'

@NgModule({
  declarations: [
    AppComponent,    
    UploadImgesComponent,
    NavBarComponent, 
    GalleryComponent, 
    ImageListComponent, 
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage feature
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
