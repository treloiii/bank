import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = {
    headers: this.headers,
    observe: 'response' as 'body',
    withCredentials: true
  };

  private baseURL: string = "http://server.enslerman.ru";

  constructor(private http: HttpClient) { }

  authUser(data) {
    return this.http.post(`${this.baseURL}/sessions`, data, this.options).toPromise();
  }

  registerUser(data) {
    return this.http.post(`${this.baseURL}/users`, data, this.options).toPromise();
  }

  getUserInfo() {
    return this.http.get(`${this.baseURL}/private/whoami`).toPromise()
  }

  getUserBills() {
    return this.http.get(`${this.baseURL}/private/bills`, this.options).toPromise();
  }

  createBill(data) {
    return this.http.post(`${this.baseURL}/private/create_bill`, data, this.options).toPromise();
  }

  getUserPayments() {
    return this.http.get(`${this.baseURL}/private/payments`, this.options).toPromise();
  }

  getUserPaymentsByBill(id) {
    return this.http.get(`${this.baseURL}/private/payments/${id}`, this.options).toPromise();
  }

  getBillByID(id) {
    return this.http.get(`${this.baseURL}/private/bills/${id}`, this.options).toPromise();
  }

  sendMoney(data) {
    return this.http.post(`${this.baseURL}/private/send_money`, data, this.options).toPromise();
  }

  getMoney(id) {
    return this.http.get(`${this.baseURL}/private/get_money/${id}`, this.options).toPromise();
  }

  deleteBill(id) {
    return this.http.delete(`${this.baseURL}/private/bills/${id}`, this.options).toPromise();
  }

  getDailyRate() {
    return this.http.get("https://www.cbr-xml-daily.ru/daily_json.js").toPromise();
  }

  getRestOfTheBills() {
    return this.http.get(`${this.baseURL}/private/get_bills`, this.options).toPromise();
  }

}
