import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { ServiceTestingService } from './service-testing.service';

describe('ServiceTestingService', () => {
  let serviceTestingService: ServiceTestingService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ServiceTestingService
      ]
    });
    serviceTestingService = TestBed.inject(ServiceTestingService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(serviceTestingService).toBeTruthy();
  });
  it('should call post when add post', () => {
    let post = {
      "userId": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    let baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    serviceTestingService.addPost(post).subscribe();
    let req = httpTestingController.expectOne({ method: "POST", url: baseUrl });
    expect(req.request.body).toEqual(post);
  });
  it('should call post when update post', () => {
    let post = {
      "userId": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    let baseUrl = 'https://jsonplaceholder.typicode.com/posts/'+post.userId;
    serviceTestingService.updatePost(post).subscribe();
    let req = httpTestingController.expectOne({ method: "PATCH", url: baseUrl });
    expect(req.request.body).toEqual(post);
  });
  it('should call post when delete post', () => {
    let post = {
      "userId": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    let baseUrl = 'https://jsonplaceholder.typicode.com/posts/'+post.userId;
    serviceTestingService.deletePost(post).subscribe();
    let req = httpTestingController.expectOne({ method: "DELETE", url: baseUrl });
    expect(req.request.body).toEqual(post.body);
  });
});
