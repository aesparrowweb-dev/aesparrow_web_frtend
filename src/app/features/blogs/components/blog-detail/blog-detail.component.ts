import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {
  blogUrl: any;
  blogData: any;
filteredData:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(parmas => {
      this.blogUrl = parmas.get('url');
      this.loadBlogByUrl(this.blogUrl)
    })
  }


  loadBlogByUrl(url: any) {
    this.http.get("assets/data/blogsData.json").subscribe(response => {
      this.blogData = response;
      this.filteredData = this.blogData.find((x:any) => x.id === url);

    })
  }

  onClickBlogsData(id:any){
    this.router.navigate(['blogs', id])
  }

}
