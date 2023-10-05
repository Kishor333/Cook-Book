import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { json } from "express";
import { Observable, tap } from "rxjs";

export class AuthIntersecptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // console.log('request is on the way!');
        // console.log(req.url);
        const modifiedRequest = req.clone(
            {
                headers: req.headers.append('Auth', 'xyz'),
                responseType: 'json'
            }
        );
        return next.handle(modifiedRequest);
        // .pipe(
        //     tap((event:any) => {
        //         console.log(event);
        //         if (event.type === HttpEventType.Response) {
        //             console.log('request is completed!');
        //             console.log(event.body)
        //         }
        //     }
        // ));

        // return next.handle(req);
    }
    // intercept(req: any, next: any) {
    //     const authToken = localStorage.getItem('token');
    //     req = req.clone({
    //         setHeaders: {
    //             Authorization: authToken
    //         }
    //     });
    //     return next.handle(req);
    // }
}