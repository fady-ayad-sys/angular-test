import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { AnotherComponentComponent } from './components/another-component/another-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AddEmojiPipe } from './pipes/add-emoji.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    AnotherComponentComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    EmployeeInfoComponent,
    PipesComponent,
    AddEmojiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
