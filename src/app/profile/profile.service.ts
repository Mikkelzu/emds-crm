import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient) { }

    public getProfileById(id: number): Observable<User> {
        return this.http.get<User>('?id=' + id)
    }

    public updateProfileById(userInfo: User): Observable<any> {
        return this.http.put<User>('?id=' + userInfo.id, userInfo)
    }
}
