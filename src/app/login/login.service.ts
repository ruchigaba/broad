import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor (private http: Http){}

  loginService(url: string, headerToken: string, contentType: string, data: any){

    let headers = new Headers({
       'Authorization': headerToken,
       'Content-Type': contentType,
       'ApplicationVersion': "3.0",
       'Platform': "Browser",
       'ApplicationName': 'MyClaim'
     })

      let options = new RequestOptions({
       headers: headers
     })
    return this.http.post(url,data,options)
      .map(res => {
        //console.log(res.json());
        return res.json();

      })
    }


  }


//   login(username:string, password: string){
//     console.log(username);
//     console.log(password);
//         return this.http.post('https://myclaimwebapiuat.crawco.com/authenticate', JSON.stringify({ username: username, password: password }))
// .map(res => {
//   res.json();
// })
//   }
