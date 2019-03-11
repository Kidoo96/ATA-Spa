import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  private API_URL:string = 'https://ata-spa.com/wp-json/';
  public Categories:any = [];

  constructor(public http: HttpClient) {

  }

  get(query:string=''){
    return this.http.get(this.API_URL + query);
  }

  getCategories(){
    this.get('wp/v2/categories').subscribe((data) => {
      this.Categories = data;
    });
  }

}
