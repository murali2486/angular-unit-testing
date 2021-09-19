import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-testing',
  templateUrl: './reactive-forms-testing.component.html',
  styleUrls: ['./reactive-forms-testing.component.scss']
})
export class ReactiveFormsTestingComponent implements OnInit {
  myform = new FormGroup({});
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: this.fb.control('', Validators.required),
      locations: this.fb.array([
        this.createItem()
      ])
    });
  }

  get locations(){
    return this.myform.get('locations') as FormArray;
  }
  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }
}
