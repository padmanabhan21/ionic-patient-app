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

  // (3)--> Select Country
  selectCountry(): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {}

    return this.http.post('https://doctorappnew.herokuapp.com/Select_Country', body, options)
      .map(this.extractData)
      .catch(this.handleError);  
    }

  // (4)--> specialist service
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


  // (5)--> Token Generation
  tokengeneration(param1,param2,param3): Observable<object[]> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "doctor_id": param1,
      "business_id": param2,
      "mobile": this.session.retrieve("user_mobile"),
      "business_date": param3,
      "token_status": "Booked"
    }

    console.log("Token Generation input", JSON.stringify(body));

    return this.http.post('https://doctorappnew.herokuapp.com/InsertAppoinment', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  sendconfirmation(param){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

   let body=  {
      "mobile":this.session.retrieve("user_mobile"),
      "message":param,
      "code":this.session.retrieve("user_country")
    }

    return this.http.post('https://doctorappnew.herokuapp.com/SendMessge', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // (6)--> livefeed 
  livefeed(param): Observable<object[]> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "business_id": param.business_id,
      "doctor_id": param.doctor_id,
      "business_date":param.appointment_date
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



  // (8)--> Feedback Service
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

  // (9)My appointments
  
myappointments(param): Observable<object[]> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const options = new RequestOptions({ headers: headers });

  let body =
  {
    "mobile":param
  }

  return this.http.post('https://doctorappnew.herokuapp.com/Select_My_Appointments', body, options)
    .map(this.extractData)
    .catch(this.handleError);
}

//OTP-Verify Screen
// 10.Send OTP
sendotp(param){
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const options = new RequestOptions({ headers: headers });

  let body =
  {
    "country_code": param.countrycode,
	  "mobile_number":param.mobile
  }

  return this.http.post('https://twiliosoftware.herokuapp.com/send_OTP',body,options)
  .map(this.extractData)
  .catch(this.handleError)  
}



//11.Verify OTP
verifyotp(param){
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const options = new RequestOptions({ headers: headers });

  let body =
  {
    "otp_num":param.user_otp,
    "country_code": param.countrycode,
    "mobile_number": param.mobile
  }

  return this.http.post('https://twiliosoftware.herokuapp.com/SMS_verify_OTP',body,options)
  .map(this.extractData)
  .catch(this.handleError)
}

// (12) Cancel Token
tokencancel(param): Observable<object[]> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const options = new RequestOptions({ headers: headers });

  let body =
  {
    "token_status":"Cancel",
    "appointment_id":param
  }

  return this.http.post('https://doctorappnew.herokuapp.com/UpdateAppoinment', body, options)
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
