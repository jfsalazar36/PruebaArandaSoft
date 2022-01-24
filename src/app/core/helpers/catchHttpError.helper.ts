import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class CatchHttpErrorHelper {

    handleError(error: HttpErrorResponse) {
        return throwError(error);
    }
}
