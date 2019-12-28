import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuList } from '../model/menulist';

@Injectable({
  providedIn: 'root'
})
export class MenulistService {
  apiURL: string = 'https://localhost:44365/';
  constructor(private httpClient: HttpClient) { this.getMenuList();}

  public createMenuList(menulist: MenuList) { }
  public updateMenuList(menulist: MenuList) { }
  public deleteCustomer(menuid: number) { }
  public getCustomerById(id: number) { }
  public getCustomers(url?: string) { }

  public getMenuList() {
    return this.httpClient.get<MenuList[]>(`${this.apiURL}/MenuController/GetMenuJson`);
  }
}
