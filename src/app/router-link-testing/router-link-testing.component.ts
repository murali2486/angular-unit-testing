import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-link-testing',
  templateUrl: './router-link-testing.component.html',
  styleUrls: ['./router-link-testing.component.scss']
})
export class RouterLinkTestingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToFunc(){
    this.router.navigateByUrl('/func');
  }
}
