import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  item: string = '';
  description: string = 'aaaaaaa';
  title: string = 'aa';
  expanded: boolean = false;
  items = [
    { title: 'Item 1', description: 'Description for Item 1', expanded: false },
    { title: 'Item 2', description: 'Description for Item 2', expanded: false },
    { title: 'Item 3', description: 'Description for Item 3', expanded: false }
  ];

  toggleItem(item: { title: string; description: string; expanded: boolean }) {
    item.expanded = !item.expanded;
  }
}
