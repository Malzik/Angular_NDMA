import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

    @Output() search = new EventEmitter<string>();
    searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
      this.searchForm = this.formBuilder.group({
          search: '',
          date_min: '',
          date_max: '',
          safe_search: false
      });
  }

  ngOnInit() {
  }

  onSubmit(search) {
      this.search.emit(search);
  }

}
