import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Blog {
  id: number;
  title: string;
  description: string;
  img: string;
  category: string;
  postedDate: string;
}


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})




export class BlogListComponent {
  blogData: Blog[] = [];
  filteredBlogs: Blog[] = [];
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadAllBlogData();
  }

  loadAllBlogData() {
    this.http.get<Blog[]>("assets/data/blogsData.json").subscribe((response) => {
      this.blogData = response;
      this.categories = Array.from(new Set(this.blogData.map((item) => item.category)));
      this.selectedCategory = this.blogData[0]?.category || '';
      this.filterByCategory(this.selectedCategory);
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredBlogs = this.blogData.filter(b => b.category === category);
  }


  onClickBlogs(id: any) {
    this.router.navigate(['blogs', id]);
    window.scrollTo(0, 0)
  }

    onClickBlogsData(id:any){
    this.router.navigate(['blogs', id])
  }
}
