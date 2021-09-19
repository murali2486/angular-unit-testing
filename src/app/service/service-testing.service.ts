import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceTestingService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(post: any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  updatePost(post: any){
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/'+ post.userId, post);
  }

  deletePost(post: any){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+ post.userId, post);
  }
}
