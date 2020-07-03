import {ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationErrorHandler } from './application-error-handler';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{provide: ErrorHandler, useClass: ApplicationErrorHandler}]
})
export class ErrorHandlingModule { }
