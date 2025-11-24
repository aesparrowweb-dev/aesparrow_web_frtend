import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';
import * as AOS from 'aos';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showSubnav: boolean = false;
  isSubnavOpen = true;
  serviceData: any;
  mainServiceId: any;

  searchQuery: string = '';
  showSearch: boolean = false;
  filteredResults: any[] = [];
  searchData: any;
  searchDataLoaded = false;

  constructor(
    public responsiveService: ResponsiveService,
    private sideNavService: SidenavService,
    private router: Router,
    private http: HttpClient
  ) { }

  private mobileBreakpoint = 992; // Common breakpoint for mobile/desktop

  ngOnInit() {
    AOS.init();
    this.loadAllService();
    this.loadAllSerachData();
    
    // Add window resize listener to handle viewport changes
    window.addEventListener('resize', this.checkViewportSize.bind(this));
  }

  ngOnDestroy() {
    // Clean up the event listener when component is destroyed
    window.removeEventListener('resize', this.checkViewportSize.bind(this));
  }
  
  private checkViewportSize() {
    // Close the mobile menu if viewport is desktop size and menu is open
    if (window.innerWidth >= this.mobileBreakpoint && this.responsiveService.isResponsiveOpen.value) {
      this.responsiveService.closeResponsive();
    }
  }

  loadAllService() {
    this.http.get('assets/data/serviceData.json').subscribe(response => {
      this.serviceData = response;
    });
  }

  loadAllSerachData(): void {
    if (this.searchDataLoaded) return;
    this.http.get<any[]>('assets/data/searchData.json').subscribe(data => {
      this.searchData = data;
      this.searchDataLoaded = true;
    });
  }

  onClickService(serviceId: any) {
    this.mainServiceId = serviceId;
    this.router.navigate(['service', this.mainServiceId]);
    window.scrollTo(0, 0);
  }

  onClickSubService(subServiceId: any) {
    this.router.navigate(['./service', this.mainServiceId, subServiceId]);
    window.scrollTo(0, 0);
  }

  openSubnav() {
    this.isSubnavOpen = true;
  }

  closeSubnav() {
    this.isSubnavOpen = false;
  }

  keepSubnavOpen() {
    this.isSubnavOpen = true;
  }

  onClickContact() {
    window.scrollTo(0, 0);
    this.router.navigate(['./contact']);
  }

  openSidenav() {
    this.responsiveService.openResponsive();
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    this.searchQuery = '';
    this.filteredResults = [];
  }

  toggleResponsiveMenu() {
    if (this.responsiveService.isResponsiveOpen.value) {
      this.responsiveService.closeResponsive();
    } else {
      this.responsiveService.openResponsive();
    }
  }

  onSearchChange(): void {
    const query = this.searchQuery.trim().toLowerCase();

    if (!query) {
      this.filteredResults = [];
      return;
    }

    this.filteredResults = this.searchData.filter((item: any) =>
      item.title?.toLowerCase().includes(query)
    );
  }

  onSelectSuggestion(id: string): void {
    this.showSearch = false;
    this.searchQuery = '';
    this.filteredResults = [];

    const parts = id.split('/');
    if (parts.length === 2) {
      this.router.navigate(['/service', parts[0], parts[1]]);
    } else {
      this.router.navigate(['/service', id]);
    }
  }

}
