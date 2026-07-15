import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements AfterViewInit {
protected readonly title = signal('Baap_Web');
 
  showTopBar = true;
  lastScrollTop = 0;
  scrollTimeout: any;
 
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;
 
  badgePosition = 50;
menuOpen: any;
 
  closeTopBar() {
    this.showTopBar = false;
  }
 
  ngAfterViewInit() {
    this.updateBadgePosition();
  }
 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateBadgePosition();
 
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
 
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
 
    if (scrollTop > this.lastScrollTop) {
      this.navbar.nativeElement.classList.add('hide');
      this.navbar.nativeElement.classList.remove('show');
 
      this.scrollTimeout = setTimeout(() => {
        this.navbar.nativeElement.classList.add('show');
        this.navbar.nativeElement.classList.remove('hide');
      }, 400);
    } else {
      this.navbar.nativeElement.classList.add('show');
      this.navbar.nativeElement.classList.remove('hide');
    }
 
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
 
  updateBadgePosition() {
    const container = this.imageContainer?.nativeElement;
    if (!container) return;
 
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
 
    if (rect.top < windowHeight && rect.bottom > 0) {
      const scrollProgress =
        (windowHeight - rect.top) / (windowHeight + rect.height);
      const maxMove = rect.height - 100;
      this.badgePosition = Math.max(
        0,
        Math.min(scrollProgress * rect.height, maxMove)
      );
    }
  }
}
