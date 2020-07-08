import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  getClientErrorMessage(error: Error): string {
    return error.message ?
      error.message :
      error.toString();
  }

  getClientStack(error: Error): string {
    return error.stack;
  }

  getServerErrorMessage(error: HttpErrorResponse): string {
    return navigator.onLine ?
      error.message :
      'Network Connection Error';
  }

  getServerStack(error: HttpErrorResponse): string {
    return error.error.stack;
  }
}
