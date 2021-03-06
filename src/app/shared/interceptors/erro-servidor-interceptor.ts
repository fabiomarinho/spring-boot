import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ErroServidorInterceptor implements HttpInterceptor {

 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   return next.handle(request).pipe(
     retry(1),
     catchError((error: HttpErrorResponse) => {
       if (error.status === 401) {
         // atualizar token
       } else {
         return throwError(error);
       }
     })
   );
 }
}
