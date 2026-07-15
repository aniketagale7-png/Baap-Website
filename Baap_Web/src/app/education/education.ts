import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HireReadyTalent } from "../services/hire-ready-talent/hire-ready-talent";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-education',
  imports: [CommonModule, ReactiveFormsModule, Footer],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {

   enrollmentForm: FormGroup;

  constructor(private fb: FormBuilder,private el: ElementRef) {
    this.enrollmentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      message: ['']
    });
  }

    ngAfterViewInit() {
    const card = document.querySelector('.custom-carousel-card') as HTMLElement;
    // if (card) {
    //   this.cardWidth = card.offsetWidth + 32;
    // }
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

  onSubmit() {
    if (this.enrollmentForm.valid) {
      console.log('Form Data:', this.enrollmentForm.value);
      alert('Form Submitted Successfully ');
      
    } else {
      this.enrollmentForm.markAllAsTouched();
    }
  }
  
 cards = [
    {
      icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23ffffff' viewBox='0 0 256 256'><path d='M43.18,128a29.78,29.78,0,0,1,8,10.26c4.8,9.9,4.8,22,4.8,33.74,0,24.31,1,36,24,36a8,8,0,0,1,0,16c-17.48,0-29.32-6.14-35.2-18.26-4.8-9.9-4.8-22-4.8-33.74,0-24.31-1-36-24-36a8,8,0,0,1,0-16c23,0,24-11.69,24-36,0-11.72,0-23.84,4.8-33.74C50.68,38.14,62.52,32,80,32a8,8,0,0,1,0,16C57,48,56,59.69,56,84c0,11.72,0,23.84-4.8,33.74A29.78,29.78,0,0,1,43.18,128ZM240,120c-23,0-24-11.69-24-36,0-11.72,0-23.84-4.8-33.74C205.32,38.14,193.48,32,176,32a8,8,0,0,0,0,16c23,0,24,11.69,24,36,0,11.72,0,23.84,4.8,33.74a29.78,29.78,0,0,0,8,10.26,29.78,29.78,0,0,0-8,10.26c-4.8,9.9-4.8,22-4.8,33.74,0,24.31-1,36-24,36a8,8,0,0,0,0,16c17.48,0,29.32-6.14,35.2-18.26,4.8-9.9,4.8-22,4.8-33.74,0-24.31,1-36,24-36a8,8,0,0,0,0-16Z'></path></svg>`,
      title: 'Hands-On Learning',
      text: 'Equip yourself with practical skills through real-world coding and live problem-solving sessions.'
    },
    {
      icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23ffffff' viewBox='0 0 256 256'><path d='M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z'></path></svg>`,
      title: 'Industry-Ready Graduates',
      text: 'Transform into a global tech leader while embracing rural empowerment.'
    },
    {
      icon: 'https://sdmntpreastus2.oaiusercontent.com/files/00000000-962c-61f6-a9c4-f69089482999/raw?se=2025-08-22T12%3A37%3A15Z&sp=r&sv=2024-08-04&sr=b&scid=5bb7044b-327f-5386-91f4-0b7ceffdc319&skoid=5cab1ff4-c20d-41dc-babb-df0c2cc21dd4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-21T21%3A26%3A48Z&ske=2025-08-22T21%3A26%3A48Z&sks=b&skv=2024-08-04&sig=tjbqgaEB89P4L%2ByoxNczDRAHgu61AXv7RaXhxAUCKMw%3D',
      title: 'Real-World Projects',
      text: 'Gain valuable experience by working on projects that mirror the tech industry’s demands.'
    }
  ];
     businessAreas = [
    {
      title: 'Practical',
      description: 'Gain hands-on experience with industry-relevant tools and technologies for real-world application.'
    },
    {
      title: 'Mentorship',
      description: 'Learn from seasoned professionals and industry leaders who guide your growth and development.'
    },
    {
      title: 'Career-Ready',
      description: 'Our guaranteed job placement program connects you with top tech companies, ensuring you land your dream job.'
    },
    {
      title: 'Impactful',
      description: 'We are committed to fostering growth in rural education and farming ecosystems, creating a ripple effect of progress.'
    },
    {
      title: 'Supportive',
      description: 'A strong community network to collaborate, share knowledge, and inspire each other’s success.'
    },
    {
      title: 'Transformative',
      description: 'Educational experiences designed to make you job-ready and future-proof in the rapidly evolving tech industry.'
    }
  ];
}
