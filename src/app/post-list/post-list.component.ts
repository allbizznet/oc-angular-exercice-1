import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number = 0;
  @Input() created_at: Date;

  constructor() {
    setTimeout(
      () => {
        this.created_at = new Date();
      }, 500)
   }

  ngOnInit() {
  }
  
  loveItPlusOne() {
    this.loveIts +=1;
  }
  loveItMinusOne() {
    this.loveIts -=1;
  }
}
