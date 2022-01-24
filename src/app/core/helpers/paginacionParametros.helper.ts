import { HttpParams } from "@angular/common/http";

export class PaginacionParametrosHelper {

    public static addPaginationParameters(pageNumber: number, pageSize: number)
        : HttpParams {
        return new HttpParams()
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString());
    }
}