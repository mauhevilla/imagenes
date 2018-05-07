import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { GalleryComponent }     from './gallery/gallery.component';
import { AbautComponent } from './abaut/abaut.component';
import { ContactComponent } from './contact/contact.component';

import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// comp propios
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { UploadImgesComponent } from './upload-imges/upload-imges.component';
import { UploadImagesDetailComponent } from './contact/upload-images-detail/upload-images-detail.component';
import { UploadImageComponent } from './contact/upload-image/upload-image.component';

import { ImageListComponent }   from './gallery/image-list/image-list.component';
import { ImageComponent }       from './gallery/image/image.component';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';

//services
import {ImageService} from './services/image.service';
import {UploadService} from './services/upload.service';

//routas
import {routes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,    
    UploadImgesComponent,
    NavBarComponent, 
    GalleryComponent, 
    ImageListComponent, 
    ImageComponent, ImageDetailComponent,
    AbautComponent, ContactComponent, UploadImagesDetailComponent, UploadImageComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage feature
    AngularFireDatabaseModule,
    routes
    
  ],
  providers: [ImageService,UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
