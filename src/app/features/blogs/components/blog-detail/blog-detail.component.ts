import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../..//services/api.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogUrl: string | null = null;
  blogData: any[] = [];        // recent posts list
  filteredData: any = null;    // single blog

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.blogUrl = params.get('url');

      if (this.blogUrl) {
        this.loadBlogDetails(this.blogUrl);
      }

      // load all recent posts
      this.loadAllBlogs();
    });
  }

  // Load single blog
  loadBlogDetails(url: string) {
    this.apiService.getData(`blogs/${url}`).subscribe({
      next: (data) => {
        this.filteredData = data;
      },
      error: (err) => {
        console.error("Error loading blog detail:", err);
      }
    });
  }

  // Load list of blogs for sidebar
  loadAllBlogs() {
    this.apiService.getData("blogs").subscribe({
      next: (data) => {
        this.blogData = data;
      },
      error: (err) => {
        console.error("Error loading blogs list:", err);
      }
    });
  }

  // On clicking recent posts
  onClickBlogsData(id: any) {
    this.router.navigate(['blogs', id]);
  }
}
