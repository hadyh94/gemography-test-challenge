import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-scroll-table',
  templateUrl: './scroll-table.component.html',
  styleUrls: ['./scroll-table.component.scss'],
})
export class ScrollTableComponent {
  displayedColumns = ['name'];
  dataSource = [];
  currentPage = 1;
  isLoading = true;
  isLimitExceeded = false;

  constructor(private api: ApiService) {
    this.callPageData(this.currentPage);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any): any {
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      this.currentPage += 1;
      this.callPageData(this.currentPage);
    }
  }
  callPageData(page) {
    if (this.isLimitExceeded === false) {
      this.isLoading = true;
      this.api.getItemsPerPage(page).subscribe(
        (result) => {
          console.log(result);
          this.dataSource = this.dataSource.concat(result?.items);
          this.isLoading = false;
        },
        (err) => {
          this.isLimitExceeded = true;
          this.isLoading = false;
        }
      );
    }
  }
  reload(){
    window.location.reload();
  }
}
