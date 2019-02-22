import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { lowerCaseValidator } from "../../shared/validators/lower-case.validator";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { NewUser } from "./new-user";
import { SignUpService } from "./signup.service";
import { PlatformDetectorService } from "../../core/platform-detector/platform-detector.service";

@Component({
    templateUrl: 'signup.component.html',
    providers: [UserNotTakenValidatorService]
})

export class SignupComponent implements OnInit{
    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>

    constructor(
        private formBuilder: FormBuilder,
        private UserNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
    ) {
        
    }

    ngOnInit(): void {
        
        this.signupForm = this.formBuilder.group({
            email: ['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['', 
                [   
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['', 
                [
                    Validators.required, 
                    Validators.minLength(2),
                    Validators.maxLength(30),
                    lowerCaseValidator
                ],
                 this.UserNotTakenValidatorService.checkUserNameTaken()
            ],

            password: ['', 
                [
                    Validators.required, 
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        })
        
        this.platformDetectorService.isPlatformBrowser() &&
                        this.emailInput.nativeElement.focus();
    }

    signUp() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signUpService
            .signup(newUser)
            .subscribe(
                () => this.router.navigate(['']),  
                err => console.log(err)
            )
    }
} 