import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentDetail } from '../model/paymentDetail.interface';
import { environment } from '../environments/environments';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  private url: string = environment.apiPagoDetalle;

  constructor(private http: HttpClient) {}

  getAllPaymentDetails() {
    return this.http.get<PaymentDetail[]>(`${this.url}`)
      .pipe(
        tap(paymentDetails => console.log('Payment details fetched:', paymentDetails)),
        catchError(this.handleError)
      );
  }

  getActivePaymentDetails() {
    return this.http.get<PaymentDetail[]>(`${this.url}/active`)
      .pipe(
        tap(paymentDetails => console.log('Active payment details fetched:', paymentDetails)),
        catchError(this.handleError)
      );
  }

  getInactivePaymentDetails() {
    return this.http.get<PaymentDetail[]>(`${this.url}/inactive`)
      .pipe(
        tap(paymentDetails => console.log('Inactive payment details fetched:', paymentDetails)),
        catchError(this.handleError)
      );
  }

  getPaymentDetailById(id: string) {
    return this.http.get<PaymentDetail>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  createPaymentDetail(paymentDetail: PaymentDetail) {
    return this.http.post<PaymentDetail>(`${this.url}`, paymentDetail)
      .pipe(catchError(this.handleError));
  }

  updatePaymentDetail(id: string, paymentDetail: PaymentDetail) {
    return this.http.put<PaymentDetail>(`${this.url}/${id}`, paymentDetail)
      .pipe(catchError(this.handleError));
  }

  deletePaymentDetail(id: string) {
    return this.http.put<PaymentDetail>(`${this.url}/deactivate/${id}`, {})
      .pipe(catchError(this.handleError));
  }

  activatePaymentDetail(id: string) {
    return this.http.put<PaymentDetail>(`${this.url}/activate/${id}`, {})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
