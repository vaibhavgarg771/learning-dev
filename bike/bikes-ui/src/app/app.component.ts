import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bikes-ui';

  constructor(private authService: AuthService){
    authService.handleAuthentication();
  }

  logout():void {
    this.authService.logout();
  }
}
