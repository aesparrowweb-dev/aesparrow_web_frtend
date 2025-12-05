import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../..//services/api.service';


interface Blog {
  id: string;
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.loadAllBlogData();
  }

  // Load all blog data from Django backend
  loadAllBlogData() {
    this.apiService.getData("blogs").subscribe({
      next: (response: Blog[]) => {
        this.blogData = response;

        // Get unique categories
        this.categories = Array.from(new Set(this.blogData.map((item) => item.category)));

        // Default category = first category
        this.selectedCategory = this.categories[0] || '';

        this.filterByCategory(this.selectedCategory);
      },
      error: (err) => {
        console.error("Error fetching blog list:", err);
      }
    });
  }

  // Filter by category
  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredBlogs = this.blogData.filter(b => b.category === category);
  }

  // Click blog card
  onClickBlogs(id: string) {
    this.router.navigate(['blogs', id]);
    window.scrollTo(0, 0);
  }

  onClickBlogsData(id: string) {
    this.router.navigate(['blogs', id]);
  }
}
