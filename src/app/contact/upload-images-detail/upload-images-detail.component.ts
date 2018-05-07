import { Component, OnInit, Input  } from '@angular/core';
import { Upload } from '../../directives/upload';
@Component({

  selector: 'app-upload-images-detail',
  templateUrl: './upload-images-detail.component.html',
  styleUrls: ['./upload-images-detail.component.css']
})
export class UploadImagesDetailComponent implements OnInit {
  @Input() selectedUpload : Upload;  
  constructor() { }

  ngOnInit() {
  }

}
