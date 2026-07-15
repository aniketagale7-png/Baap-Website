import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-company',
  imports: [CommonModule],
  templateUrl: './company.html',
  styleUrl: './company.scss',
})
export class Company implements AfterViewInit, OnDestroy {
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  @ViewChild('carouselTrack', { static: false }) carouselTrack!: ElementRef;

  badgePosition = 50;

  currentIndex = 0;
  cardWidth = 0;
  autoSlideInterval: any;

  cards = [
    {
      img1: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_testimonials_achyutgodbole-150x150.jpeg',
      img2: 'https://baapcompany.com/wp-content/uploads/2025/02/admin-ajax-1.webp',
      name: 'Achyut Godbole',
      title: 'Indian Business Executive',
      text: 'Setting up an IT company in a village is a fantastic experiment. In 23 years of experience as a CEO and MD of various companies there have been moments I will never forget, my visit at BAAP will be one of them.',
    },
    {
      img1: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_testimonials_sarangdharnirmal-150x150.jpeg',
      img2: 'https://baapcompany.com/wp-content/uploads/2025/02/admin-ajax-1.webp',
      name: 'Sarangdhar Nirmal',
      title: 'Chairman, Prabhat Dairy',
      text: 'BAAP Company, founded by Raosaheb Ghuge in rural Maharashtra, empowers farmers children with tech skills and employment opportunities. With a vision to expand across the state, BAAP inspires stakeholders like us to join hands and drive a net positive impact.',
    },
    {
      img1: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_testimonials_manojagarwal-150x150.jpeg',
      img2: 'https://baapcompany.com/wp-content/uploads/2025/02/admin-ajax-1.webp',
      name: 'Manoj Agarwal',
      title: 'Founder and CEO, SIMPLIFY VMS',
      text: 'The Baap Company delivers innovative solutions with a personal touch. Their dedication to quality and customer satisfaction is truly impressive.',
    },
    {
      img1: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_testimonials_vitthaljangale.jpeg',
      img2: 'https://baapcompany.com/wp-content/uploads/2025/02/admin-ajax-1.webp',
      name: 'Vitthal Jangale',
      title: 'Software Professional',
      text: 'A very small percentage of students can actually work for a company right after college. I used to wonder,Is the college syllabus going to help after college? At BAAP, they are skilling students with whats relevant to the industry',
    },
    {
      img1: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_testimonials_hanmantgaikwad-150x150.jpeg',
      img2: 'https://baapcompany.com/wp-content/uploads/2025/02/admin-ajax-1.webp',
      name: 'Hanmant Gaikwad',
      title: 'Chairman and MD, BVG India Limited',
      text: 'The Baap Company combines creativity and efficiency to deliver outstanding results. Their team is a pleasure to work with',
    },
    {
      img1: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_testimonials_sagarbabar-300x300.jpeg',
      img2: 'https://baapcompany.com/wp-content/uploads/2025/02/admin-ajax-1.webp',
      name: 'Sagar Babar',
      title: 'Founder, Comsense Technologies',
      text: 'The Baap Company exceeded my expectations with their exceptional service and innovative solutions. Highly recommend them for anyone seeking top-notch quality and professionalism.',
    },
  ];

  // 👇 Scroll badge logic
  @HostListener('window:scroll', [])
  onScroll() {
    this.updateBadgePosition();
  }

  updateBadgePosition() {
    const container = this.imageContainer.nativeElement;
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const scrollProgress =
        (windowHeight - rect.top) / (windowHeight + rect.height);
      const maxMove = rect.height - 150;
      this.badgePosition = Math.max(
        0,
        Math.min(scrollProgress * rect.height, maxMove)
      );
    }
  }

  // 👇 Mouse follower logic
  x = -100;
  y = -100;
  tx = -100;
  ty = -100;
  private rafId: number | null = null;

  isActive = false;
  isPressed = false;

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

  ngAfterViewInit() {
    // calculate card width
    const cardElement =
      this.carouselTrack.nativeElement.querySelector('.custom-carousel-card');
    if (cardElement) {
      this.cardWidth = cardElement.offsetWidth + 32; // + margin
    }

    // start auto slide
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    clearInterval(this.autoSlideInterval);
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

  // 👇 Carousel logic
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextCard();
    }, 3000); // slide every 3s
  }

  nextCard() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.cards.length - 1;
    }
  }
}
