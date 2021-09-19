import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {
  eno: string | undefined;
  @ViewChild('form') form: NgForm | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
