import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-imagelist',
    templateUrl: './imagelist.component.html',
    styleUrls: ['./imagelist.component.scss']
})
export class ImagelistComponent implements OnInit {
    @Input() photos;
    ngOnInit(): void {
        console.log(this.photos);
    }
}
