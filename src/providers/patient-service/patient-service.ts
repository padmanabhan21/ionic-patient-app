import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import { SessionStorageService} from 'ngx-webstorage';


@Injectable()
export class PatientServiceProvider {

  constructor(public http: Http,
              public session:SessionStorageService) {
    console.log('Hello PatientServiceProvider Provider');
  }

  // Get Template
  getfunction(): Observable<object[]> {
    return this.http.get('')
      .map(this.extractData)
      .catch(this.handleError);
  }

  // Post Template
  postfunction(): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    return this.http.post('', options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // (1)--> Login Service
  loginUser(param): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body = {
      "mobile": param.mobile,
      "user_name": param.name,
      "login_status": "login"
    }

    return this.http.post('https://doctorappnew.herokuapp.com/Insert_User_Profile', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // (2)--> Update Login Service
  updateLogin(param): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "mobile": param.mobile,
      "user_name": param.name,
      "login_status": "login"
    }

    return this.http.post('https://doctorappnew.herokuapp.com/Update_User_Profile', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // (3)--> specialist service
  specialist(param): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {

      "country": "India",
      "city": "Chennai"

    }

    return this.http.post('https://doctorappnew.herokuapp.com/Select_BusinessandDoctors', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // (4)--> Token Generation
  tokengeneration(param1,param2): Observable<object[]> {

    // console.log("LOG FROM SERVICE FILE",JSON.stringify(param));
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "doctor_id": param1,
      "business_id": param2,
      "mobile": this.session.retrieve("user_mobile"),
      "business_date": moment().format("YYYY-MM-DD"),
      "token_status": "Booked"
    }

    return this.http.post('https://doctorappnew.herokuapp.com/InsertAppoinment', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // (5)--> livefeed 
  livefeed(): Observable<object[]> {

    // console.log("LOG FROM SERVICE FILE",JSON.stringify(param));
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "business_id": 68,
      "doctor_id": "nare83",
      "business_date":moment().format("YYYY-MM-DD")
    }

    return this.http.post('https://doctorappnew.herokuapp.com/livefeed', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // (7)--> update personal,medical,lifestyle profiles
  updateProfile(param): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });


    return this.http.post('https://doctorappnew.herokuapp.com/Update_User_Profile', param, options)
      .map(this.extractData)
      .catch(this.handleError);
  }



  // (6)--> Feedback Service
  feedback(param): Observable<object[]> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "doctor_id": param.doctor_id,
      "business_id": param.business_id,
      "mobile": param.mobile,
      "recommend_doctor": param.recommend,
      "health_problem": param.healthproblem,
      "wait_time": param.waittime,
      "satisfy_reason": param.satisfy_reason,
      "comments": param.comments
    }

    return this.http.post('https://doctorappnew.herokuapp.com/Insert_FeedBack ', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    console.log(JSON.stringify(body));
    return body;
  }

  private handleError(error: Response | any) {
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
