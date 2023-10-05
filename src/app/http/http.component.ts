import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { post } from './post.model';
import { HttpServiceService } from '../http-service.service';
import { response } from 'express';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit,OnDestroy {

  serverData: post[]=[];
  error = null;
  errorSub?: Subscription;

  constructor( private httpService:HttpServiceService) { }

  ngOnInit(): void {
   this.errorSub = this.httpService.error.subscribe(
      (errorMessage:any)=>{
        this.error = errorMessage;
      }
    )

    this.fetchData();
  }


  onCreatePost(postData:post) {
    this.httpService.createPost(postData);
    // this.hhtp.post<{name:string}>('https://cookbook-c15c2-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',postData)
    // .subscribe(
    //   response=>{
    //     console.log(response)
    //   }
    // )

    // console.log(postData)
  };

  onFetchData() {
      this.fetchData();
  };

 private fetchData() {
  //fetch data from httpServiveSevice
    this.httpService.fetchData().subscribe(
      (response:post[])=>{
        this.serverData = response;
        // console.log(this.serverData);
      },
      error => {
        this.error =error.error.error;
        console.log(error)
      }
    )
  }
  //   this.hhtp.get< { [key:string]:post } >('https://cookbook-c15c2-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
  //   .pipe(
  //     map (
  //     response => {
  //         const postArr:post[]= [];
  
  //         for(let key in response) {
  //           postArr.push({...response[key], id:key})
  //         }
  //         return postArr;
  //       }
  //     )
  //   )
  //   .subscribe(
  //     response=>{
  //       this.serverData = response;
  //       console.log(this.serverData)
  //     }
  //   )
  // }

  onDeleteData() {
    this.httpService.deleteAllData()
    .subscribe(
      response => {
        this.serverData = [];
      }
    )
    // this.fetchData()
  };

  ngOnDestroy(): void {
    this.errorSub?.unsubscribe();
  }
}
