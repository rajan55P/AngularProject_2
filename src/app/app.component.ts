import { Component, OnInit } from '@angular/core';
import { UserService } from './features/user/services/user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app_2';
  users: any[] = [];

  constructor(private userService : UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
