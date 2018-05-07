import { Component, OnInit, Input  } from '@angular/core';
import { Upload } from '../../directives/upload';
// impor toaster para memsajes
//import { ToastrService} from 'ngx-toastr';
import { UploadService} from '../../services/upload.service';
@Component({

  selector: 'app-upload-images-detail',
  templateUrl: './upload-images-detail.component.html',
  styleUrls: ['./upload-images-detail.component.css']
})
export class UploadImagesDetailComponent implements OnInit {
  @Input() selectedUpload : Upload;  
  constructor(private uploadService:UploadService) { }

  ngOnInit() {
  }

  onDelete2(aborrar:Upload){
    if(confirm('Esta seguro de querer Eliminarlo ?')){     
      this.uploadService.deleteUpload(aborrar);
      //this.toast.success('Successfull Operation','Producto Elimnado ...');
    }
  }  
}
