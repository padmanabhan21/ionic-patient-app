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
  loginUser(param):Observable<object[]>{
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    const options = new RequestOptions({ headers: headers });

    let body ={
      "mobile":param.mobile,				  
      "user_name":param.name,		
      "login_status":"login"
    }

    return this.http.post('https://doctorappnew.herokuapp.com/Insert_User_Profile',body,options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  // Update Login Service
  updateLogin(param):Observable<object[]>{
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "mobile":param.mobile,					
      "user_name":param.name,
      "login_status":"login"
  }

    return this.http.post('https://doctorappnew.herokuapp.com/Update_User_Profile',body,options)
    .map(this.extractData)
    .catch(this.handleError);
}


 // Feedback Service
 feedback(param):Observable<object[]>{

  // console.log("LOG FROM SERVICE FILE",JSON.stringify(param));
  const headers = new Headers();
  headers.append('Content-Type','application/json');
  const options = new RequestOptions({ headers: headers });

  let body =
  {
    "doctor_id":param.doctor_id,
    "business_id":param.business_id,
    "mobile":param.mobile,
    "recommend_doctor":param.recommend,
    "health_problem":param.healthproblem,
    "wait_time":param.waittime,
    "satisfy_reason":param.satisfy_reason,
    "comments":param.comments
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
