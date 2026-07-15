import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Baap_Web');
   // cursor variables
  x = -100;
  y = -100;
  tx = -100;
  ty = -100;
  isActive = false;
  isPressed = false;
  private rafId: number | null = null;

  @HostListener('document:mousemove', ['$event'])
  onMove(e: MouseEvent) {
    this.tx = e.clientX;
    this.ty = e.clientY;
    if (this.rafId === null) this.tick();
  }

  @HostListener('document:mousedown') onDown() {
    this.isPressed = true;
  }

  @HostListener('document:mouseup') onUp() {
    this.isPressed = false;
  }

  ngOnInit() {
    this.tick();
  }

  ngOnDestroy() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }

  private tick = () => {
    this.x += (this.tx - this.x) * 0.18;
    this.y += (this.ty - this.y) * 0.18;
    this.rafId = requestAnimationFrame(this.tick);
  };

  activate() {
    this.isActive = true;
  }

  activatePress() {
    this.isActive = true;
    this.isPressed = true;
  }

  deactivate() {
    this.isActive = false;
    this.isPressed = false;
  } 
}
