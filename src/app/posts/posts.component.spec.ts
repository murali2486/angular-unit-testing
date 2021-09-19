import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceTestingService } from '../service/service-testing.service';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Injectable } from '@angular/core';

class RouterStub{
  navigate(params: any){}
}
@Injectable()
export class ActivatedRouteStub
{
    private subject = new BehaviorSubject(this.testParams);
    params = this.subject.asObservable();

    private _testParams!: {};
    get testParams() { return this._testParams; }
    set testParams(params: {  }) {
        this._testParams = params;
        this.subject.next(params);
    }
}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let mockActivatedRoute = new ActivatedRouteStub();
  let serviceTestingService: ServiceTestingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ PostsComponent ],
      providers: [
        ServiceTestingService,
        {provider: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    serviceTestingService = TestBed.inject(ServiceTestingService);
    mockActivatedRoute.testParams = {id: 0};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get posts from service', () => {
    let posts = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    ];
    spyOn(serviceTestingService, 'getPosts').and.callFake(() => {
      return from([ posts ]);
    });
    component.ngOnInit();
    expect(component.posts).toBe(posts);
  });

  it('should call server and save the post when it adds', () => {
    let spy = spyOn(serviceTestingService, 'addPost').and.callFake(t => {
      return of();
    });
    component.addingPost();
    expect(spy).toHaveBeenCalled();
  });

  it('should push value to posts after save', () => {
    let post = {
      "userId": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    let spy = spyOn(serviceTestingService, 'addPost').and.returnValue(from([ post ]));
    component.addingPost();
    expect(component.postResult).toBe(post);
  });

  it('should push value to posts after save', () => {
    let message = 'some error';
    let spy = spyOn(serviceTestingService, 'addPost').and.returnValue(throwError(message));
    component.addingPost();
    expect(component.message).toBe(message);
  });

  it('should call server to delete the post if user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(serviceTestingService, 'deletePost').and.returnValue(of());
    component.deletePost(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should not call server to delete the post if user not confirm', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(serviceTestingService, 'deletePost').and.returnValue(of());
    component.deletePost(1);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should redirect to user when users click save', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.save();
    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should set val to be 0', () => {
    expect(component.val).toBe(0);
  });

});
