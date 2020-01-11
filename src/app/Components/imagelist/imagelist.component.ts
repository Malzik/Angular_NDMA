import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Observable} from 'rxjs';
import {Photo} from '../../photo';
import {log} from 'util';

@Component({
  selector: 'app-imagelist',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.scss']
})
export class ImagelistComponent implements OnInit {
  private photos: Observable<Photo>;

  constructor(private apiService: ApiService) {
  }

    getPhotos(): void {
        this.photos = this.apiService.getPhotos();
    }

  ngOnInit() {
    this.photos = this.apiService.getPhotos();
    console.log(this.photos);
  }

}
