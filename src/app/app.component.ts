import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'https://api.nylas.com/files/bbqmiacejeeq1yydy2p0wq65u/download';
  fileValid:boolean = true
  headers: HttpHeaders;
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders();
  
    this.headers = this.headers.append('Accept', 'application/json');
    this.headers = this.headers.append(
      'Authorization',
      'Bearer xxxxxxxxxxxxxxxxxxxxxx'
    );
  }

  
  download()
  {
    this.http.get(`https://api.nylas.com/files/bbqmiacejeeq1yydy2p0wq65u/download`,{
      responseType: 'arraybuffer',headers:this.headers} 
     ).subscribe(response => this.downLoadFile(response, "application/ms-excel"));
  }
   
  
  
  
  downLoadFile(data: any, type: string) {
  let blob = new Blob([data], { type: type});
  let url = window.URL.createObjectURL(blob);
  let pwa = window.open(url);
  if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert( 'Please disable your Pop-up blocker and try again.');
  }
  }
 


}
interface Kafein {
  name:string;
  address:string;
}