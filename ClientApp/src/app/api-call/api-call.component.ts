import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit {
  public _greetings: string = "";

  constructor(private _httpClient: HttpClient) { }

  async ngOnInit() {
    await this._httpClient.get("/api/v1/greetings")
      .toPromise()
      .then((res: any) => {
          console.log("Got Data:", res);

          this._greetings = res.result || 'NA';
      })
      .catch((err) => {
        console.log("GOT ERROR");
        console.log(err);
      });
  }

}
