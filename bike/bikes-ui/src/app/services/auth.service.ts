import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService{

    constructor(private router: Router){}

    auth0 = new auth0.WebAuth({
        clientID: 'ddCwxfStLDcNPNq6AtNb7xAbzcxOfmbl', 
        domain: 'vg771.au.auth0.com', 
        responseType: '', 
        audience: 'http://localhost:8080', 
        redirectUri: 'http://localhost:4200/callback', 
        scope: 'openid view:registration view:registrations'
    });

    public login():void { 
        this.auth0.authorize();
    }

    public handleAuthentication():void {
        this.auth0.parseHash((err, authResult) => {
            if(authResult && authResult.accessToken && authResult.idToken){
                window.location.hash = ''; 
                this.setSession(authResult);
                this.router.navigate(['/admin']);
            }
            else if (err) {
                this.router.navigate(['/admin']);
                console.log(err);
            }
        });
    }

    private setSession(authResult): void{
         const expiresAt = JSON.stringify((authResult.expiresIn*1000) + new Date().getTime());
         localStorage.setItem('acces_token', authResult.accessToken);
         localStorage.setItem('id_token', authResult.idToken); 
         localStorage.setItem('expires_at', expiresAt);
    }

    public logout(): void {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');

        this.router.navigate(['/'])
    }

    public isAuthenticated(): boolean{
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

}
