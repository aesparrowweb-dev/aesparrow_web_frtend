import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
blogData:any;

  constructor (private http: HttpClient) {}


  ngOnInit(){
    this.http.get("assets/data/blogsData.json").subscribe(response => {
      this.blogData = response;
    })
  }

}
