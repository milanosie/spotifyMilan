import { Component, OnInit } from '@angular/core';
import  {HttpServiceService} from "../http-service.service";
import {Artist} from "../artist";

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  artist : string;
  result : Artist[];
  constructor(private artistService: HttpServiceService) { }

  ngOnInit() {
  }

  searchArtist(){
    this.artistService.searchArtist(this.artist).subscribe(res => {
      this.result = res.artists.items;
    });
  }

  favoriteArtist(artistToFavorite : Object) {
    console.log(artistToFavorite);
    this.artistService.favoriteArtist(artistToFavorite);
  }
}
