import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringTestingComponent } from './string-testing/string-testing.component';
import { FunctionTestingComponent } from './function-testing/function-testing.component';
import { InterpolationTestingComponent } from './interpolation-testing/interpolation-testing.component';
import { RouterLinkTestingComponent } from './router-link-testing/router-link-testing.component';
import { OutputTestingComponent } from './output-testing/output-testing.component';
import { InputTestingComponent } from './input-testing/input-testing.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsTestingComponent } from './reactive-forms-testing/reactive-forms-testing.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    StringTestingComponent,
    FunctionTestingComponent,
    InterpolationTestingComponent,
    RouterLinkTestingComponent,
    OutputTestingComponent,
    InputTestingComponent,
    TemplateFormsComponent,
    ReactiveFormsTestingComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
