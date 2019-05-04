import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { appRouter } from './app.router';
import { WelcomeComponent } from './welcome.component';
import { ResourceNotFoundComponent } from './notfound.component';
import { DriverModule } from './driver/driver.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ResourceNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    UserModule,
    DriverModule,
    AdminModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
