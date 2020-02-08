import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule } from '@angular/material'
import {NgxWebstorageModule} from 'ngx-webstorage';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    MessageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
    ]),
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot()
  ],
  entryComponents: [
    LoginComponent, MessageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
