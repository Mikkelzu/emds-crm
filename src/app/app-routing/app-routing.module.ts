import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    // all routes beyond here except ** will require authguards
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    // ** must always be at the bottom
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
