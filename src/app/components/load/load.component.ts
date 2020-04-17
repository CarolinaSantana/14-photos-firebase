import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { LoadPhotosService } from '../../services/load-photos.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styles: []
})
export class LoadComponent implements OnInit {

  isOnElement = false;
  files: FileItem[] = [];

  constructor( public loadPhotos: LoadPhotosService ) { }

  ngOnInit(): void {
  }

  loadImages() {
    this.loadPhotos.loadImagesFirebase( this.files );
  }

  removeFiles() {
    this.files = [];
  }

}
