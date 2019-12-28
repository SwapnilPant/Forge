import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MenuList } from '../model/menulist';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenulistService {
  public menulists: MenuList[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public createMenuList(menulist: MenuList) { }
  public updateMenuList(menulist: MenuList) { }
  public deleteMenuList(menuid: number) { }
  public getMenuListById(id: number) { }

  public getMenuList(): Observable<HttpResponse<MenuList[]>> {
    return this.http.get<MenuList[]>(this.baseUrl + 'menu', { observe: 'response' });
  }
}
