import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './features/student/components/student/student.component';
import { UserComponent } from './features/user/components/user/user.component';
import {FileProcessingComponent} from './features/file-processing/components/file-processing/file-processing.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UserComponent,
    FileProcessingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
