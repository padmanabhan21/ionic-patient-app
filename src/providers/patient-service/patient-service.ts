import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the PatientServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PatientServiceProvider {

  constructor(public http: Http) {
    console.log('Hello PatientServiceProvider Provider');
  }

  // Get Template
  getfunction():Observable<object[]>{
    return this.http.get('')
    .map(this.extractData)
    .catch(this.handleError);
  }

  // Post Template
  postfunction():Observable<object[]>{
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    const options = new RequestOptions({ headers: headers });

    return this.http.post('',options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  // Login Service
  loginUser():Observable<object[]>{
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    const options = new RequestOptions({ headers: headers });

    let body ={
      "mobile":"9444043033",				  
      "user_name":"viji",		
      "login_status":"login"
    }

    return this.http.post('https://doctorappnew.herokuapp.com/Insert_User_Profile',body,options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  // Update Login Service
  updateLogin():Observable<object[]>{
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "mobile":"9444043033",					
      "user_name":"viji",
      "login_status":"login"
  }

    return this.http.post('https://doctorappnew.herokuapp.com/Update_User_Profile',body,options)
    .map(this.extractData)
    .catch(this.handleError);
}


 // Feedback Service
 feedback():Observable<object[]>{
  const headers = new Headers();
  headers.append('Content-Type','application/json');
  const options = new RequestOptions({ headers: headers });

  let body =
  {
    "business_id":"6",
    "doctor_id":"Raje10",
    "mobile":"9677097721",
    "reason":"backpain",
    "message":"calm and 100 percent satisfaction"
  }

  return this.http.post('https://doctorappnew.herokuapp.com/Insert_FeedBack ',body,options)
  .map(this.extractData)
  .catch(this.handleError);
}

  private extractData(res: Response) {
    let body = res.json();
    console.log(JSON.stringify(body));
    return body;
    }
  
    private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const err = error || '';
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
  
}
