import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class PageService {
	constructor(private http: HttpClient) { }

	pageAdd(objForm) {
		console.log(objForm);
		console.log(environment.rootURL);
		// this.http.post(`${this.uri}/add`, obj)
		// 	.subscribe(res => console.log(res));
	}
}
