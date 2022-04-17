import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IEmployee } from '../employee';

@Injectable()
export class ConfigService {
    
    constructor(private http: HttpClient) { }
    private url= '/assets/data/employees.json';
    // getCharacters() {
    //   return this
    //           .http
    //           .get(`${this.url}/characters`);
    // }
   
    getEmployees():Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.url).pipe(
            retry(3), // retry a failed request up to 3 times
        // then handle the error
          );;
       
    }
}

