import { Component } from '@angular/core';
import { MenulistService } from './services/menulist.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(private MenulistService: MenulistService) {
    var list = MenulistService.getMenuList();
  }
}
