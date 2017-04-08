import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from "../http-service.service";
import {Artist} from "../artist";

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  favoriteArtists: Artist[];
  constructor(private artistService: HttpServiceService) { }

  ngOnInit() {
    this.favoriteArtists = this.artistService.getFavoriteArtists();
  }

}
