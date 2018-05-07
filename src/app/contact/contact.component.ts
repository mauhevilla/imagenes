import { Component, OnInit, Input } from '@angular/core';
import { Upload } from '../directives/upload';
import { UploadService} from '../services/upload.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  uploadimageList:Upload [];    
  selectedUpload : Upload;
  constructor(private servUpload :UploadService) { }

  ngOnInit() {
    return this.servUpload.getImages()
    .snapshotChanges()
    .subscribe(item => {
      this.uploadimageList=[];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"]=element.key;
        this.uploadimageList.push(x as Upload);
      });
    });
  }
  
  onSelect(miUploadImage :Upload){
    this.selectedUpload=miUploadImage;
  }
}
