import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
server:string = "https://softkleen.com.br/web/api/";
  constructor(private http: HttpClient) { }
  connectApi(dados:any, nomeApi:string){
    const htppOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    let url = this.server + nomeApi
    return this.http.post(url, JSON.stringify(dados),htppOptions).map(res=>res);
  }
}
