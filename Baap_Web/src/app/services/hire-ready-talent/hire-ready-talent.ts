import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-hire-ready-talent',
  imports: [CommonModule, Footer],
  templateUrl: './hire-ready-talent.html',
  styleUrl: './hire-ready-talent.scss'
})
export class HireReadyTalent {
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
      icon: `https://baapcompany.com/wp-content/uploads//2025/02/thebaapcompany_hireapproach1-1.svg`,
      title: 'Fast & Efficient Hiring',
      text: 'Quickly scale your team with pre-screened IT experts.'
    },
    {
      icon: `https://baapcompany.com/wp-content/uploads//2025/02/thebaapcompany_hireapproach2-1.svg`,
      title: 'Flexible Engagement Models',
      text: 'Full-time, contract, and remote hiring options.'
    },
    {
      icon: 'https://baapcompany.com/wp-content/uploads//2025/02/thebaapcompany_hireapproach3-1.svg',
      title: 'High-Quality Talent Pool',
      text: 'Only top-performing professionals make the cut.'
    }
  ];
       businessIdea = [
    {
      title: 'Skilled',
      description: 'Gain access to top-tier IT professionals with the expertise to drive your projects forward.'
    },
    {
      title: 'Flexible',
      description: 'Choose from scalable hiring models that adapt to your short-term and long-term needs.'
    },
    {
      title: 'Adaptable',
      description: 'Work with IT talent remotely or on-site, ensuring seamless collaboration from anywhere.'
    },
    {
      title: 'Risk-Free',
      description: 'Evaluate professionals before making permanent commitments, reducing hiring risks.'
    },
    {
      title: 'Efficient',
      description: 'Data-backed insights and creative execution deliver measurable success.'
    },
     {
      title: 'Reliable',
      description: ' Our vetted experts bring proven experience and technical proficiency to every project.'
    },
  ];

  hireSections = [
    {
      title: 'Scale with IT Experts',
      description: `Expand your team with highly skilled IT experts who bring extensive 
      experience, exceptional efficiency, and deep technical expertise. 
      With their innovative approach and problem-solving mindset, they 
      ensure your projects are executed seamlessly and drive long-term success.`,
      points: [
        'Quick Access to IT Talent',
        'Seamless Integration',
        'Flexible Hiring Models'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_services_hire-1.png',
      reverse: false
    },
    {
      title: 'Access Top IT Experts',
      description: `Hire the brightest minds in the industry to drive innovation, solve 
      complex challenges, and elevate your projects to new heights. With 
      their expertise and strategic approach, they ensure seamless 
      execution, enhanced efficiency, and long-term success.`,
      points: [
        'Top-tier Tech Talent',
        'Proficient in Advanced Technologies',
        'Prepared to Deliver from Day One'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_hire2.png',
      reverse: true
    },
    {
      title: 'Hire Experts for Impactful Projects',
      description: `Gain access to industry experts with specialized skill sets tailored 
      to your unique project needs. Whether you require advanced technical 
      expertise, innovative problem-solving, or strategic insights, our 
      professionals bring the knowledge and experience to drive success.`,
      points: [
        'AI, Cybersecurity, and Cloud Computing',
        'On-demand Hiring',
        'Flexible Engagements'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_hire3.png',
      reverse: false
    },
    {
      title: 'Skilled Professionals for Remote Work',
      description: `Collaborate with top-tier remote professionals who bring expertise, 
      efficiency, and innovation to your projects—no matter where they are. 
      Our global talent pool ensures you have access to the best minds in the 
      industry, capable of delivering exceptional results.`,
      points: [
        'Remote IT Talent',
        'Location Independent Solutions',
        'Seamless Collaboration'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_education_mba1.png',
      reverse: true
    },
    {
      title: 'Assess Talent Before Committing',
      description: `Minimize hiring risks by thoroughly assessing professionals before 
      committing to a long-term decision. Our process allows you to evaluate 
      their skills, expertise, and cultural fit, ensuring they align with your 
      project goals and business needs.`,
      points: [
        'Project-based Assessments',
        'Performance-based Evaluations',
        'Hassle-free Transition'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_hire4.png',
      reverse: false
    },
    {
      title: 'Find Senior Experts for Key Roles',
      description: `Bring on experienced leaders who combine strategic vision with deep 
      technical expertise to drive your IT initiatives forward. They ensure 
      your projects stay on track, meet business objectives, and adapt to 
      evolving industry trends.`,
      points: [
        'Senior Developers, IT Architects, and Project Managers',
        'Leadership Expertise',
        'Strategic IT Alignment with Business Goals'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_education_mba2.png',
      reverse: true
    }
  ];
}
