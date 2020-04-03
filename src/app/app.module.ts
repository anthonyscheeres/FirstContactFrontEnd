import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { OverzichtComponent } from './overzicht/overzicht.component';





@NgModule({
  declarations: [


    AppComponent,
    NavbarComponent,
    UsersComponent,
    ProfileComponent,
    LoginFormComponent,
    LoginComponent,
    RegisterComponent,
    RegFormComponent,
    OverzichtComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(


      [

        


             {
          path: 'users',
          component: UsersComponent
        },

        {
          path: 'register',
          component: RegisterComponent
        },
      
        {
          path: '',
          component: LoginComponent
        },
        {
          path: 'profile',
          component: ProfileComponent
        },
   
        {
          path: 'overzicht',
          component: OverzichtComponent
        },

        // otherwise redirect to home
        { path: '**', redirectTo: '' }
      ]
    ),
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
