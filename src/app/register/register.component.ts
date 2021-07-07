import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public registerForm;
    constructor(private fb: FormBuilder, private registerService: RegisterService) { }

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            firstName: [],
            lastName: [],
            email: [],
            password: [],
        })
    }

    private validatorEmail() {
        // todo
    } 

    private validatorPassword() {
        // todo
    }

    public onSubmit() {
        // todo
        this.registerService.register(this.registerForm)
    }

}
