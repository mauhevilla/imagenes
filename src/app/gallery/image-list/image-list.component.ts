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

  constructor(private imagaService :ImageService) { }

  ngOnInit() {
    this.images=this.imagaService.getImages();
  }

}
