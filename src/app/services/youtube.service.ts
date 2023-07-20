import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  youtubeUrl: string= 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUoTyVfIkM-hjz4JauDoVvog&key=AIzaSyBoV7bqpNPoAdlwer63vumiaXlkrc8YpJs';

  

  constructor(public http:HttpClient) {
    console.log('listo')


   }
   getVideos (){

    return this.http.get(this.youtubeUrl)






   }
}
