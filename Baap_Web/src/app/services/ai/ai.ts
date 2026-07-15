import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-ai',
  imports: [CommonModule, Footer],
  templateUrl: './ai.html',
  styleUrl: './ai.scss',
})
export class Ai implements AfterViewInit {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el: any) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      }
    });
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.area');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            obs.unobserve(entry.target); // फक्त एकदाच animation
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el: Element) => observer.observe(el));
  }

  fpcData = [
    {
      title: 'Personalized Education & Tutoring',
      desc: 'Empower learners with AI-driven education tailored to their unique pace and style. Our innovative solutions adapt to individual learning needs, providing personalized content and support.',
      points: [
        'Intelligent Tutoring Systems',
        'AI-Powered Personalized Learning Paths',
        'Automated Grading & Feedback',
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_ai1-1.png',
    },
    {
      title: 'Healthcare & Medical Assistance',
      desc: 'Our advanced AI technologies enable precise and timely diagnoses, providing healthcare professionals with critical information to make informed decisions. By integrating AI into medical practices, we enhance patient outcomes, streamline workflows, and pave the way for a smarter, more efficient healthcare system.',
      points: [
        'AI-Powered Symptom Analysis',
        'Virtual Health Assistants',
        'Predictive Disease Detection',
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_ai2.png',
    },
    {
      title: 'Customer Support & Virtual Assistants',
      desc: 'We leverage advanced AI technologies to streamline customer service processes, provide personalized experiences, and improve response times. By automating routine tasks and delivering intelligent insights, we help you build stronger, more efficient customer relationships.',
      points: [
        '24/7 AI Chatbots & Voice Assistants',
        'Sentiment Analysis for Better Engagement',
        'Automated Query Resolution',
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_ai3.png',
    },
    {
      title: 'Creative Content Generation',
      desc: ' Unlock AI-driven creativity for writing, design, and multimedia content. Whether it’s crafting compelling narratives, designing visually stunning graphics, or producing engaging multimedia, our solutions empower you to achieve exceptional results with ease and efficiency.',
      points: [
        'AI-Powered Copywriting & Storytelling',
        'mage & Video Enhancement',
        'Music & Design Automation',
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_ai4.png',
    },
    {
      title: 'Legal Assistant & Advisory',
      desc: 'We are transforming legal research and compliance with AI-driven intelligence. By automating compliance checks and legal analysis, we help legal professionals stay ahead of regulations, reduce risks, and enhance efficiency in their practices.',
      points: [
        'AI-Powered Document Review & Drafting',
        'Smart Legal Chatbots & Advisors',
        'Contract Analysis & Risk Assessment',
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_ai5.png',
    },
    {
      title: 'Business Intelligence & Strategy',
      desc: 'Make data-driven decisions with our AI-powered insights. AI technologies analyze your data to uncover valuable patterns and trends, providing you with actionable intelligence. By leveraging these insights, you can optimize operations, enhance strategies, and drive business growth with confidence.',
      points: [
        'AI-Powered Market & Competitor Analysis',
        'Predictive Analytics for Smarter Strategies',
        'Automated Financial & Sales Forecasting',
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_ai6.png',
    },
    {
      title: 'AI Agro Advisor',
      desc: 'Optimize agriculture with smart AI-driven solutions. Advanced technologies enhance farming practices by providing precise data analysis, predictive insights, and automated processes. By leveraging AI, we help farmers increase productivity, reduce costs, and promote sustainable agriculture, ensuring a more efficient and resilient food supply chain.',
      points: [
        'AI-Based Crop Monitoring & Yield Prediction',
        'Precision Farming & Smart Irrigation',
        'Pest & Disease Detection with AI',
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_ai7.png',
    },

    {
      title: 'Supply Chain & Logistics Optimization',
      desc: 'Enhance efficiency in logistics, warehousing, and inventory management with our advanced solutions. By leveraging cutting-edge technologies, streamline operations, optimize resource allocation, and improve accuracy. Ensure seamless coordination and real-time tracking, helping you reduce costs and boost productivity across your supply chain',
      points: [
        'AI-Powered Demand Forecasting',
        'Route Optimization & Smart Warehousing',
        'Predictive Maintenance for Supply Chain',
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_ai8.png',
    },
  ];

  businessAreas = [
    {
      title: 'EXPERTISE',
      description:
        'Our team of experienced AI professionals brings a wealth of knowledge to design and implement solutions that deliver real results.',
    },
    {
      title: 'SCALABLE',
      description:
        'Whether you’re a startup or an enterprise, our AI-as-a-Service adapts to your scale, allowing for growth without complexity',
    },
    {
      title: 'COMPETITIVE',
      description:
        'Leverage the latest advancements in AI to stay ahead of competitors, ensuring your business operates at its highest potential.',
    },
    {
      title: 'TAILORED',
      description:
        'We offer AI models that are specifically tailored to meet the unique needs of your business, ensuring the highest relevance and impact.',
    },
    {
      title: 'AFFORDABLE',
      description:
        'With a pay-as-you-go model, you only pay for the AI services you need, making it an affordable option for businesses of all sizes.',
    },
    {
      title: 'EVOLVING',
      description:
        'We constantly update and improve our AI models to ensure that you are using the most advanced and effective solutions available.',
    },
  ];
}
