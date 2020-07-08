import {ErrorHandler, Injectable} from "@angular/core";
import {ErrorService} from "../services/error.service";
import {HttpErrorResponse} from "@angular/common/http";
import {LoggingService} from "../services/logging.service";

@Injectable()
export class ApplicationErrorHandler implements ErrorHandler {

  constructor(private errorService: ErrorService,
              private logger: LoggingService) {

  }

  handleError(error: Error | HttpErrorResponse) {

    let message;
    let stackTrace;

    if (error instanceof HttpErrorResponse) {
      // Server Error
      message = this.errorService.getServerErrorMessage(error);
      stackTrace = this.errorService.getServerStack(error);
    } else {
      // Client Error
      message = this.errorService.getClientErrorMessage(error);
      stackTrace = this.errorService.getClientStack(error);
    }
    // Always log errors
    this.logger.logError(message, stackTrace);
  }

}
