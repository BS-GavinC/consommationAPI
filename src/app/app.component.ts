import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http : HttpClient) {

    http.post<User>("http://localhost:1337/post", {id : 1, name : "paul"}).subscribe({
      next : (data) => {
        this.user = data
      }
    })

  }


  user! : User

  title = 'consommationAPI';
}

export interface User {
  id : string
  name : string
}
