import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  userService: UserService = inject(UserService);
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const user = this.userService.getUser();
    console.log(user);

    const url = request.url;
    const last = url.split('/').pop();
    if (user.token) {
      request = request.clone({
        setHeaders: {
          access_token: user.token,
        },
      });
    }
    if (last == 'refreshToken') {
      request = request.clone({
        setHeaders: {
          refreshToken: user.refreshToken,
        },
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // debugger;
        if (error.status === 401) {
          const isRefrsh = confirm(
            'Your Session is Expred. Do you want to Continue'
          );

          if (isRefrsh) {
            //  this.userService.refreshToken().subscribe(
            //   (res) => {
            //     console.log(res);
            //      return next.handle(request.clone({
            //       setHeaders: {
            //         access_token: res.token,
            //       },
            //     }));
            //     }
            //  );
            return this.userService.refreshToken().pipe(
              switchMap((res) => {
                console.log(res);
                const newRequest = request.clone({
                  setHeaders: {
                    access_token: res.token,
                  },
                });
                return next.handle(newRequest);
              })
            );
          } else {
            this.userService.logout();
          }
        }
        return throwError(error);
      })
    );
  }
}
