import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit(): void {
  }

}
