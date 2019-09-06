import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'typeBlog';
  lastUpdate = new Date();

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus metus a ultrices condimentum. Integer tempus tempor arcu ut dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in diam non est sagittis accumsan. Duis auctor convallis ipsum, sodales hendrerit justo molestie in. Qui',
      loveIts: 1,
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus metus a ultrices condimentum. Integer tempus tempor arcu ut dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in diam non est sagittis accumsan. Duis auctor convallis ipsum, sodales hendrerit justo molestie in. Qui',
      loveIts: -1,
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus metus a ultrices condimentum. Integer tempus tempor arcu ut dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in diam non est sagittis accumsan. Duis auctor convallis ipsum, sodales hendrerit justo molestie in. Qui',
      loveIts: 0,
    },
  ];

}
