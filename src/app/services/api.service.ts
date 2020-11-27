import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getItemsPerPage(pageNumber = 1){
    return this.http.get<any>('https://api.github.com/search/repositories?q=created:>2020-10-27&sort=stars&order=desc&page=' + pageNumber)
  }
}
