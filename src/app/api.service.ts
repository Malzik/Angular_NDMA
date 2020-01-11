import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from './photo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private key = '20b0535705c24954ccceac6e0ea0c3fa';
    private link = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=';
    private tags;
    private minUploadDate = '';
    private maxUploadDate = '';
    private nsfw = '';
    private end = '&format=json&nojsoncallback=1';

    constructor(private http: HttpClient) { }

    getPhotos(datas) {
        this.tags = '&tags=' + datas.search;
        this.minUploadDate += '&min_upload_date=' + datas.date_min;
        this.maxUploadDate += '&max_upload_date=' + datas.date_max;
        this.nsfw += '&safe_search=' + datas.safe_search;
        return this.http.get<Photo>(this.link + this.key + this.tags + this.minUploadDate + this.maxUploadDate + this.nsfw + this.end);
    }
}
