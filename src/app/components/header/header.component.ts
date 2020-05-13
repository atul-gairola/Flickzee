import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 @Output() searchMade = new EventEmitter();

  onClick(inputSearch: HTMLInputElement){
  const searchedMovie = inputSearch.value;
  console.log(searchedMovie);
  this.searchMade.emit(searchedMovie);
  inputSearch.value = '';
  };
  constructor() { }

  ngOnInit(): void {
  }

}
