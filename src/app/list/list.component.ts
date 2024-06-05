// list.component.ts
import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  name: string = '';

  constructor() {}

  ngOnInit() {

    };
  }

