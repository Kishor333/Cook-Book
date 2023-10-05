import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoginInterseptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('out going request');
        console.log(req.headers)
    return next.handle(req)
    .pipe (
        tap(
            event => {
                if (event.type === HttpEventType.Response) {
                    console.log('request is completed!');
                    console.log(event.body);
                }
            }
        )
    )
    }
}