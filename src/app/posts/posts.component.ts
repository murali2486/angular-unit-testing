import { ServiceTestingService } from './../service/service-testing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;
  message: any;
  postResult: any;
  val: any;
  constructor(
    private serviceTestingService: ServiceTestingService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.serviceTestingService.getPosts().subscribe(posts => this.posts = posts);
    this.route.params.subscribe(p => {
      this.val = p['id'];
    })
  }
  addingPost(){
    const post = {
      "userId": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    this.serviceTestingService.addPost(post).subscribe(
      t => this.postResult = t,
      e => this.message = e
      );
  }

  deletePost(post: any) {
    if(confirm('Are you sure delete the post')){
      this.serviceTestingService.deletePost(post).subscribe();
    }
  }
  save(){
    this.router.navigate(['users']);
  }
}
