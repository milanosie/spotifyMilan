import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {Artist} from "./artist";



@Injectable()
export class HttpServiceService {

  favoriteArtists : Artist[];
  constructor(private http: Http) {
    this.favoriteArtists = [];
  }

  searchArtist(searchWord: string) {
    let fullURL = 'https://api.spotify.com/v1/search?type=artist&q=' + encodeURIComponent(searchWord);
    return this.http.get(fullURL)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  favoriteArtist(artist: Object) {
    this.favoriteArtists.push(artist);
    localStorage.setItem("spotifyFavorites", JSON.stringify(this.favoriteArtists));
  }

  getFavoriteArtists() {
    if(localStorage.getItem("spotifyFavorites") != null){
      this.favoriteArtists = JSON.parse(localStorage.getItem("spotifyFavorites"));
    }
    return this.favoriteArtists;
  }

}
