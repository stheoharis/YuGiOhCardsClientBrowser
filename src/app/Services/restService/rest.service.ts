import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class RestService {

	constructor(private http: HttpClient) { }

	//configUrl = "http://52.57.88.137/api/card_data/Infernoid%20Patrulea";

	get<Response>(url, controller, param): Observable<Response> {
		
		return this.http.get<Response>(url + "/" + controller + "/" + param)
			.pipe(
				catchError((error, caught) => {
					var exception = this.handleError(error);
					return throwError(exception);
				})
			);
	}
	
	private handleError(httpErrorResponse: HttpErrorResponse) {
		console.log(httpErrorResponse);
	}
}
