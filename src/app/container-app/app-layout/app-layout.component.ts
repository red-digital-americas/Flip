import { Component, OnInit } from '@angular/core';
import { navItems } from './../../_nav';


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  constructor() {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

   
    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
  salir(): void {

    localStorage.clear();
    window.location.href = "/login";
    
  }

}