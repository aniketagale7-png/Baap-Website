import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-digital-marketing',
  imports: [CommonModule, Footer],
  templateUrl: './digital-marketing.html',
  styleUrl: './digital-marketing.scss'
})
export class DigitalMarketing {
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const card = document.querySelector('.custom-carousel-card') as HTMLElement;
    if (card) {
      this.cardWidth = card.offsetWidth + 32;
    }
    const fadeElements: NodeListOf<HTMLElement> =
      this.el.nativeElement.querySelectorAll('.fade-left, .fade-up, .fade-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          target.classList.add('show');
        } else {
          target.classList.remove('show');
        }
      });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));

  }
  badgePosition = 50;
  @ViewChild('imageContainer') imageContainer!: ElementRef;

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
  @ViewChild('carouselTrack', { static: false }) carouselTrack!: ElementRef;

  private tick = () => {
    this.x += (this.tx - this.x) * 0.18;
    this.y += (this.ty - this.y) * 0.18;
    this.rafId = requestAnimationFrame(this.tick);
  };
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
  cardWidth = 0;
  currentIndex = 0;
  businessAreas = [
    {
      img1: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_testimonials_achyutgodbole-150x150.jpeg',
      img2: 'https://baapcompany.com/wp-content/uploads/2025/02/admin-ajax-1.webp',
      name: 'Achyut Godbole',
      title: 'Indian Business Executive',
      text: '  Setting up an IT company in a village is a fantastic experiment. In 23 years of experience as a CEO and MD of various companies there have been moments I will never forget, my visit at BAAP will be one of them.',
    },
    {
      img1: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_testimonials_sarangdharnirmal-150x150.jpeg',
      img2: 'https://baapcompany.com/wp-content/uploads/2025/02/admin-ajax-1.webp',
      name: 'Sarangdhar Nirmal',
      title: 'Chairman, Prabhat Dairy',
      text: ' BAAP Company, founded by Raosaheb Ghuge in rural Maharashtra, empowers farmers children with tech skills and employment opportunities. With a vision to expand across the state, BAAP inspires stakeholders like us to join hands and drive a net positive impact.',
    },
    {
      img1: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_testimonials_manojagarwal-150x150.jpeg',
      img2: 'https://baapcompany.com/wp-content/uploads/2025/02/admin-ajax-1.webp',
      name: 'Manoj Agarwal',
      title: 'Founder and CEO, SIMPLIFY VMS',
      text: ' The Baap Company delivers innovative solutions with a personal touch. Their dedication to quality and customer satisfaction is truly impressive.',
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
      text: 'The Baap Company exceeded my expectations with their exceptional service and innovative solutions. Highly recommend them for anyone seeking top-notch quality and professionalism..',
    },
  ];

  nextCard() {
    if (this.currentIndex < this.businessAreas.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.businessAreas.length - 1;
    }
  }
   cards = [
    {
      icon: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23ffffff%22%20viewBox%3D%220%200%20256%20256%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M136%2C112H48a8%2C8%2C0%2C0%2C0-8%2C8v88a8%2C8%2C0%2C0%2C0%2C8%2C8h88a8%2C8%2C0%2C0%2C0%2C8-8V120A8%2C8%2C0%2C0%2C0%2C136%2C112Zm-8%2C88H56V128h72Zm88-16v16a16%2C16%2C0%2C0%2C1-16%2C16H176a8%2C8%2C0%2C0%2C1%2C0-16h24V184a8%2C8%2C0%2C0%2C1%2C16%2C0Zm0-72v32a8%2C8%2C0%2C0%2C1-16%2C0V112a8%2C8%2C0%2C0%2C1%2C16%2C0Zm0-56V72a8%2C8%2C0%2C0%2C1-16%2C0V56H184a8%2C8%2C0%2C0%2C1%2C0-16h16A16%2C16%2C0%2C0%2C1%2C216%2C56Zm-64-8a8%2C8%2C0%2C0%2C1-8%2C8H112a8%2C8%2C0%2C0%2C1%2C0-16h32A8%2C8%2C0%2C0%2C1%2C152%2C48ZM40%2C80V56A16%2C16%2C0%2C0%2C1%2C56%2C40H72a8%2C8%2C0%2C0%2C1%2C0%2C16H56V80a8%2C8%2C0%2C0%2C1-16%2C0Z%22%3E%0A%20%20%20%20%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A`,
      title: 'Continuous Improvement',
      text: 'Agile and iterative, we adapt quickly for optimal outcomes.'
    },
    {
      icon: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23ffffff%22%20viewBox%3D%220%200%20256%20256%22%3E%0A%20%20%3Cpath%20d%3D%22M238.64%2C33.36a32%2C32%2C0%2C0%2C0-45.26%2C0h0a32%2C32%2C0%2C0%2C0%2C0%2C45.26c.29.29.6.57.9.85l-26.63%2C49.46a32.19%2C32.19%2C0%2C0%2C0-23.9%2C3.5l-20.18-20.18a32%2C32%2C0%2C0%2C0-50.2-38.89h0a32%2C32%2C0%2C0%2C0%2C0%2C45.26c.29.29.59.57.89.85L47.63%2C168.94a32%2C32%2C0%2C0%2C0-30.27%2C8.44h0a32%2C32%2C0%2C1%2C0%2C45.26%2C0c-.29-.29-.6-.57-.9-.85l26.63-49.46A32.4%2C32.4%2C0%2C0%2C0%2C96%2C128a32%2C32%2C0%2C0%2C0%2C16.25-4.41l20.18%2C20.18a32%2C32%2C0%2C1%2C0%2C50.2-6.38c-.29-.29-.59-.57-.89-.85l26.63-49.46A32.33%2C32.33%2C0%2C0%2C0%2C216%2C88a32%2C32%2C0%2C0%2C0%2C22.63-54.62ZM51.3%2C211.33a16%2C16%2C0%2C0%2C1-22.63-22.64h0A16%2C16%2C0%2C1%2C1%2C51.3%2C211.33Zm33.38-104a16%2C16%2C0%2C0%2C1%2C0-22.63h0a16%2C16%2C0%2C1%2C1%2C0%2C22.63Zm86.64%2C64a16%2C16%2C0%2C0%2C1-22.63-22.63h0a16%2C16%2C0%2C0%2C1%2C22.63%2C22.63Zm56-104A16%2C16%2C0%2C1%2C1%2C204.7%2C44.67h0a16%2C16%2C0%2C0%2C1%2C22.63%2C22.64Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A`,
      title: 'Data-Driven Decision Making',
      text: 'Insights drive our decisions, maximizing impact'
    },
    {
      icon: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23ffffff%22%20viewBox%3D%220%200%20256%20256%22%3E%0A%20%20%3Cpath%20d%3D%22M232.07%2C186.76a80%2C80%2C0%2C0%2C0-62.5-114.17A80%2C80%2C0%2C1%2C0%2C23.93%2C138.76l-7.27%2C24.71a16%2C16%2C0%2C0%2C0%2C19.87%2C19.87l24.71-7.27a80.39%2C80.39%2C0%2C0%2C0%2C25.18%2C7.35%2C80%2C80%2C0%2C0%2C0%2C108.34%2C40.65l24.71%2C7.27a16%2C16%2C0%2C0%2C0%2C19.87-19.86ZM62%2C159.5a8.28%2C8.28%2C0%2C0%2C0-2.26.32L32%2C168l8.17-27.76a8%2C8%2C0%2C0%2C0-.63-6%2C64%2C64%2C0%2C1%2C1%2C26.26%2C26.26A8%2C8%2C0%2C0%2C0%2C62%2C159.5Zm153.79%2C28.73L224%2C216l-27.76-8.17a8%2C8%2C0%2C0%2C0-6%2C.63%2C64.05%2C64.05%2C0%2C0%2C1-85.87-24.88A79.93%2C79.93%2C0%2C0%2C0%2C174.7%2C89.71a64%2C64%2C0%2C0%2C1%2C41.75%2C92.48A8%2C8%2C0%2C0%2C0%2C215.82%2C188.23Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A',
      title: 'Transparent Communication',
      text: 'Clear collaboration ensures alignment and success.'
    }
  ];
       businessIdea = [
    {
      title: 'Strategic',
      description: 'Innovative approaches ensure your brand stays competitive in the ever-evolving digital landscape.'
    },
    {
      title: 'Customer-Centric',
      description: 'Every solution is designed with your customers in mind, enhancing engagement and satisfaction.'
    },
    {
      title: 'Scalable',
      description: 'Our marketing strategies evolve alongside your business, ensuring sustainable growth'
    },
    {
      title: 'Expert-Led',
      description: 'A team of seasoned professionals brings deep industry expertise to every project.'
    },
    {
      title: 'Personalized',
      description: 'Every strategy is uniquely crafted to align with your specific business goals.'
    },
    {
      title: 'Results-Driven',
      description: 'Data-backed insights and creative execution deliver measurable success.'
    }
  ];
}
