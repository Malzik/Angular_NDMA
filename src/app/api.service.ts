import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from './photo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private key = '20b0535705c24954ccceac6e0ea0c3fa';
    private link = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=';
    private tags = '&tags=';
    private min_upload_date = '&min_upload_date=';
    private max_upload_date = '&max_upload_date=';
    private safe_search = '&safe_search=';

    constructor(private http: HttpClient) { }

    getPhotos(datas): Observable<Photo> {
        this.tags += datas.search;
        this.min_upload_date += '';
        this.max_upload_date += '';
        this.safe_search += '';
        return this.http.get<Photo>(this.link + this.key + this.tags + this.min_upload_date + this.max_upload_date + this.safe_search);
    }
}
