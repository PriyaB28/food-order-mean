import { Component, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  imagesrc: string = '\\assets\\images\\hero-bg.jpg';
  foodService: FoodService = inject(FoodService);
  isSubpage: boolean = false;
  userService: UserService = inject(UserService);
  userData!: User;
  constructor() {
    this.foodService.isSubpage.subscribe((val) => {
      if (val) {
        this.isSubpage = val;
      } else {
        this.isSubpage = false;
      }
    });
    this.userService.userObservable.subscribe((userDetail) => {
      this.userData = userDetail;
    });
  }
  ngOnInit() {}

  logout() {
    this.userService.logout();
  }
}
