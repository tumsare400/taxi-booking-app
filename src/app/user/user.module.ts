import { NgModule }
    from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BookRideComponent } from './book-Ride.component';



import { RideNowComponent } from './ride-Now.component';

import { SelectDriverComponent } from './select-driver.component';

import { ConfirmBookingComponent } from './confirm-booking.component';
import { UserSignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.route';
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({

    declarations: [


        BookRideComponent,
        RideNowComponent,
        SelectDriverComponent,
        ConfirmBookingComponent,
        UserSignUpComponent,
        SignInComponent

    ],

    imports: [

        BrowserModule,
        RouterModule.forChild(userRoutes),
        ReactiveFormsModule
    ],

    exports: [
        BookRideComponent,
        RideNowComponent,
        SelectDriverComponent,
        ConfirmBookingComponent,
        UserSignUpComponent,
        SignInComponent,
        RouterModule
    ],
    providers: []
})

export class UserModule {

}
