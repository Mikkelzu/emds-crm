import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm;

    constructor(private fb: FormBuilder, private loginService: LoginService) { 

    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: [],
            password: []
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
        this.loginService.login(this.loginForm)
    }

}
