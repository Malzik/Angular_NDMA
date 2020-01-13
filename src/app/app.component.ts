import { Component } from '@angular/core';
import {ApiService} from './api.service';
import {HttpErrorResponse} from '@angular/common/http';

export interface SearchForm {
    search: string;
    points: string;
    date_min: string;
    date_max: string;
    safe_search: boolean;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'NDMA';
    private searchDatas: SearchForm;
    private photos: Array<any>;

    constructor(private apiService: ApiService) {}

    formSubmited(form) {
        this.searchDatas = form;
        this.photos = [];
        this.apiService.getPhotos(form).subscribe(data => {
                data.photos.photo.forEach(photo => {
                    this.photos.push({
                        title: photo.title,
                        link: 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' +
                            photo.id + '_' + photo.secret + '.jpg',
                        owner: photo.owner,
                        id: photo.id
                    });
                });
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured.');
                } else {
                    console.log('Server-side error occured.');
                }
            });
    }
}
