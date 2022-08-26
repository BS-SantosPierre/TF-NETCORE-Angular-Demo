import { Component, OnInit } from '@angular/core';

export type Link = {
  title: string;
  url?: string;
  children?: Link[];
  isVisible?: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	linkList: Link[] = [];

  constructor() { }

  ngOnInit(): void {
    this.linkList = [
      {
        title: 'Home', url: '/'
      },
      {
        title: 'Demos', children: [
					{
            title: 'Demo Hello',
            url: '/demos/hello-angular'
          },
          {
            title: 'About',
            url: '/demos/about'
          },
          {
            title: 'Info',
            url: '/demos/info'
          },
          {
            title: 'Contact',
            url: '/demos/contact'
          },
          {
            title: 'Demo Parent',
            url: '/demos/demo-dialogue'
          },
          {
            title: 'Demo Directive',
            url: '/demos/demo-directives'
          },
          {
            title: 'Demo Pipes',
            url: '/demos/demo-pipes'
          },
					{
            title: 'Demo Forms',
            url: '/demos/forms'
					},
					{
            title: 'Demo Params',
            url: '/demos/params'
					},
					{
            title: 'Demo Http',
            url: '/demos/demo-http'
					}
        ]
      },
      {
        title: 'Exos', children: [
          {
            title: 'Accordeon',
            url: '/exos/accordeon'
          },
          {
            title: 'Chrono',
            url: '/exos/chrono'
          },
					{
            title: 'Fruit List',
            url: '/exos/fruit-list'
          },
					{
            title: 'Login',
            url: '/exos/login'
          },
					{
            title: 'Shopping List',
            url: '/exos/shopping-list'
          },
          {
            title: 'Shopping List PLus',
            url: '/exos/shopping-list-plus'
          },
        ]
      }
    ]
  }
	toggleVisible(index: number) {
    this.linkList[index].isVisible = !this.linkList[index].isVisible;
  }

}
