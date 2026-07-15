import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-software',
  imports: [CommonModule, Footer],
  templateUrl: './software.html',
  styleUrl: './software.scss'
})
export class Software {

 imageInView: boolean = false;

@HostListener('window:scroll', [])
onScroll() {
  const image = document.querySelector('.scroll-image') as HTMLElement;
  if (image) {
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      this.imageInView = true;
    }
  }
}

  fpcData = [
    {

      title: 'Web Development',
      desc: 'We specialize in crafting stunning, high-performance websites designed to captivate users and drive conversions. Our websites are not only visually appealing but also optimized for speed and performance, ensuring a seamless user experience.',
      points: [
        'Responsive & Scalable Designs',
        'Optimized for Speed & SEO.',
        'Tailored to Your Business Needs'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_soft1.png'
    },
    {
      title: 'Web Application Development',
      desc: 'We specialize in building secure, scalable, and dynamic web applications that cater to your business needs. Our solutions ensure robust security, seamless scalability, and dynamic functionality, providing a reliable and efficient platform for your operations.',
      points: [
        'Custom Solutions for Every Business',
        'Cloud-Based & On-Premise Apps',
        'API Integrations & Automation'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_soft2.png'
    },
    {
      title: 'QA & Testing Services',
      desc: 'We ensure the delivery of flawless software through rigorous testing and comprehensive quality assurance processes. Our meticulous approach guarantees that every product meets the highest standards of performance, reliability, and user satisfaction.',
      points: [
        'Automated & Manual Testing',
        'Performance & Security Testing',
        'Bug Tracking & Fixes'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_soft3.png'
    },
    {
      title: 'UI/UX Design',
      desc: 'We specialize in designing intuitive, human-centric interfaces that significantly enhance user experience. Our approach focuses on creating seamless, user-friendly designs that prioritize the needs and behaviors of users.',
      points: [
        'Wireframing & Prototyping',
        'User Research & Journey Mapping',
        'Conversion-Focused Design'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_soft4.png'
    },
    {
      title: 'E-commerce Development',
      desc: 'We specialize in creating powerful e-commerce platforms designed to scale with your business. Our solutions are built to handle increasing traffic and transactions, ensuring a seamless shopping experience for your customers.',
      points: [
        'Shopify, WooCommerce, & Custom Solutions',
        'Secure Payment Gateways & Checkout Optimization',
        'Performance-Driven Online Stores'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_soft5.png'
    },
    {
      title: 'Managed IT Outsourcing',
      desc: 'Extend your IT team with our expert outsourcing services. We provide skilled professionals who seamlessly integrate with your existing team, offering specialized expertise and support.',
      points: [
        'Skilled IT Professionals on Demand',
        'Flexible Engagement Models',
        'Reduced Hiring Costs'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_soft6.png'
    }
    ,
    {
      title: 'Data Analysis & AI-Driven Solutions',
      desc: 'Transform your data into actionable insights with our AI and predictive analytics solutions. We leverage advanced algorithms and machine learning techniques to analyze your data, uncover patterns, and predict future trends.',
      points: [
        'Custom Machine Learning Models',
        'Real-Time Data Visualization',
        'Predictive Business Intelligence'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_soft7.png'
    }
  ];



     businessAreas = [
    {
      title: 'Innovative',
      description: 'We bring creative, forward-thinking solutions that empower businesses to stay ahead in the market.'
    },
    {
      title: 'Customer-Centric',
      description: 'Our solutions are designed with your customers in mind, ensuring that every touchpoint delivers a superior experience.'
    },
    {
      title: 'Affordable',
      description: 'We provide high-quality software services at competitive prices, offering businesses of all sizes access to world-class technology solutions.'
    },
    {
      title: 'Scalable',
      description: 'Our services grow with you. Whether you’re a startup or an established enterprise, we provide scalable solutions that adapt to your needs.'
    },
    {
      title: 'Experienced',
      description: 'With years of industry experience, our team brings in-depth technical expertise and business acumen to every project.'
    },
    {
      title: 'Customized',
      description: 'No two businesses are the same, which is why we provide fully customized solutions that meet your unique challenges and goals.'
    },

  ];
}
