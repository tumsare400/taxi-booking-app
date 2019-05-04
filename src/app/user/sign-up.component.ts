import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: "UserSignUpComponent",
    templateUrl: "./sign-up.component.html",
})
export class UserSignUpComponent  implements OnInit{
 
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder){ }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)')
    }
//     btnClick= function () {
//         this.router.navigateByUrl('/home');
// };
}
