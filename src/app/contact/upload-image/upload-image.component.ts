import { Component, OnInit , Input} from '@angular/core';
import { Upload } from '../../directives/upload';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  
  @Input() upload : Upload;
  constructor() { }
  ngOnInit() {
  }

}
