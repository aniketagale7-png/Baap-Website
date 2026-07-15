import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-product',
  imports: [CommonModule, Footer],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
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
  cards = [
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
services = [
    {
      id: 1,
      title: 'CRM Solution',
      subtitle: 'Boost Engagement & Growth',
      description: `Our CRM solution helps businesses manage customer interactions,
        automate workflows, and gain insights to build stronger relationships.
        From sales tracking to personalized marketing campaigns, our CRM makes managing customer data seamless.`,
      featuresLeft: [
        'Lead Management',
        'Sales pipeline tracking',
        'Automated Follow-ups'
      ],
      featuresRight: [
        'Data-driven Insights',
        'Integrated Platforms'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_products_crm-1.png',
      imgPosition: 'right'
    },
    {
      id: 2,
      title: 'ERP Solution',
      subtitle: 'Streamline Your Business Operations',
      description: `Our ERP system brings all your business processes—finance, HR,
        inventory, and supply chain—into a single, integrated platform.
        Designed for efficiency, our ERP ensures data accuracy,
        streamlines operations, and improves overall productivity.`,
      featuresLeft: [
        'Centralized Management',
        'Real-time Analytics',
        'Automated Tracking'
      ],
      featuresRight: [
        'Inventory optimization',
        'Scalable Business Needs'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_products_erp-1.png',
      imgPosition: 'left'
    },
    {
      id: 3,
      title: 'E-Commerce Solution',
      subtitle: 'Seamless E-commerce for All',
      description: `From small businesses to large enterprises, our e-commerce
        solutions make it easy to set up and manage online stores.
        Our platform provides powerful tools for selling, order processing,
        and customer engagement—all while ensuring a seamless shopping experience.`,
      featuresLeft: [
        'User-friendly Management',
        'Payment Gateway',
        'Mobile-Responsive'
      ],
      featuresRight: [
        'Inventory Tracking',
        'Personalized Experiences'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_products_ecommerce-1.png',
      imgPosition: 'right'
    },
    {
      id: 4,
      title: 'School ERP',
      subtitle: 'Smart Solutions for Education Management',
      description: `Designed for schools, colleges, and universities, our School
        ERP system simplifies administration, automates processes,
        and enhances communication between educators, students, and parents.`,
      featuresLeft: [
        'Admission Management',
        'Attendance Tracking',
        'Fee Management'
      ],
      featuresRight: [
        'Staff Management',
        'Parent Portal'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_products_schlerp.png',
      imgPosition: 'left'
    }
  ];
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

