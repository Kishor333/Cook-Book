import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from './http/post.model';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  error= new Subject<string>();

  constructor(private http:HttpClient) { }

  createPost(postData:post) {
    this.http.post<{name:string}>('https://cookbook-719a4-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',postData)
    .subscribe(
      response=>{
        console.log(response);
      },
      error => {
        this.error.next(error.error.error);
      }
    )
    // console.log(postData)
  };

  fetchData() {
    let testparams = new HttpParams();
    testparams = testparams.append('print','pretty');
    testparams = testparams.append('custom','key');
    return this.http.get< { [key:string]:post } >('https://cookbook-719a4-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
    {
      headers: new HttpHeaders({'header':'hello'}),
      params : testparams,
      responseType: 'json'
    }
    // ,
    //   {
    //     headers: new HttpHeaders({'custom header':'hello form this side'})
    //   }
    )
      .pipe(
        map (
        response => {
            const postArr:post[]= [];
    
            for(let key in response) {
              postArr.push({...response[key], id:key})
            }
            return postArr;
          }
        )
      )
    // .subscribe(
    //   response=>{
    //     this.serverData = response;
    //     console.log(this.serverData)
    //   }
    // )
  };

  deleteAllData() {
  return this.http.delete< { [key:string]:post } >('https://cookbook-719a4-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    // .subscribe(
    //   response=>{
    //     console.log(response)
    //   }
    // );
  }
}
