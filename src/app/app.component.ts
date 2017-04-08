import { Component } from '@angular/core';
import {HttpServiceService} from "./http-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpServiceService]
})
export class AppComponent {
  showSearch : boolean;
  showFavorite : boolean;

  toggleShow(view: String) {
    if(view == "Search") {
      this.showFavorite = false;
      this.showSearch = true;
    }
    else if(view == "Favorite") {
      this.showFavorite = true;
      this.showSearch = false;
    }
  }
}

