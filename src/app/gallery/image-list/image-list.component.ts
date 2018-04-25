import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../directives/image';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  
  images: Image []=[];
  selectedImage : Image;
  constructor(private imageService :ImageService) { }

  ngOnInit() {
    this.images=this.imageService.getImages();
  }

  onSelect(miImage :Image){
    this.selectedImage=miImage;
  }
}
