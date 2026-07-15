
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-services',
  imports: [CommonModule, Footer],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})

export class Services {
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
  solutions = [
    {
      title: 'Software Service',
      heading: 'Custom Software Development',
      description: `From rural roots to global reach, our software is built to perform and evolve, driving impact at every level.`,
      image: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_services_soft-1.png',
      features: [
        ['High-performance', 'Results Driven', 'Expert Testing'],
        ['User Centric', 'Conversion Focused', 'Host Uploads']
      ]
    },
    {
      title: 'AI Services',
      heading: 'Cutting-Edge AI Services',
      description: `From education to agriculture, healthcare to law advisory, AI is revolutionizing industries.`,
      image: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_services_ai-1.png',
      features: [
        ['AI-Driven Learning', 'AI Healthcare Support', 'ntelligent AI Assistants'],
        ['AI Agro Advisor', 'AI-Powered Insights', 'AI Legal Advisor']
      ]
    },
    {
      title: 'Digital Marketing',
      heading: 'Story-Driven Digital Marketing',
      description: 'From startups to enterprises, we help businesses amplify their voice through digital marketing.',
      image: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_services_digital-1.png',
      features: [['Goal-Driven',
        'Action-Oriented',
        'Impactful Images',], ['On-Brand Visuals',
        'Targeted Ad Campaigns',
        'SEO Optimized Content']


      ]
    },
    {
      title: 'Data Analytics & Support',
      heading: 'Precision Analytics & Reporting',
      description:
        'Trained in cutting-edge analytics, our team from rural India delivers precision-driven solutions that help businesses grow.',
      image: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_services_data-1.png',

      features: [['Interactive Dashboards',
        'AI-Powered Forecasts',
        'Structured Data Solutions',], ['Efficient Query Handeling',
        'Accurate Records Mgmt',
        'Customer Assistance']


      ]
    },
    {
      title: 'Hire-Ready Talent',
      heading: 'Expert Talent On-Demand',
      description:
        'We provide access to a pool of highly skilled, pre-vetted talent ready to join your team and drive results.',
      image: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_services_hire.png',

      features: [['Expert IT Professionals',
        'Top Tier Developers',
        'Specialized Talent',], ['Flexible Remote Work',
        'Long-Term Commitment',
        'Expert Project Leads']


      ]
    }
  ];

  buttonText: string = 'Testimonials';
  title: string = 'What Our Clients & Partners Say';
  description: string = `From visionary businessmen visiting our village to collaborate, 
                         to outsiders marvelling at how our model bridges farming and tech, 
                         our testimonials reflect the growing belief that innovation 
                         truly has no boundaries.`;
}
