import {Routes,RouterModule} from '@angular/router';
import { GalleryComponent }     from './gallery/gallery.component';
import { AbautComponent } from './abaut/abaut.component';
import { ContactComponent } from './contact/contact.component';
import  {ModuleWithProviders} from '@angular/core';
import {UploadImgesComponent} from './upload-imges/upload-imges.component';

const appRoutes :Routes= [
    {path :'' , redirectTo:'/gallery' ,pathMatch:'full'},
    {path :'gallery' , component:GalleryComponent},
    {path :'contact' , component:ContactComponent},
    {path :'about' ,  component:AbautComponent},
    {path :'upload-imges' , component: UploadImgesComponent}
  ];

  export const routes :ModuleWithProviders=RouterModule.forRoot(appRoutes);