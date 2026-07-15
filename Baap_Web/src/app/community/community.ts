import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-community',
  imports: [CommonModule, Footer],
  templateUrl: './community.html',
  styleUrl: './community.scss'
})
export class Community {
  fpcData = [
    {
      id: 'FPC1',
      title: 'Nutritious Fodder Production',
      desc: 'Ensuring organic and sustainable feeding for donated calves, promoting better livestock health.',
      points: [
        'Nutritious fodder for donated calves.',
        'Sustainable and organic feeding practices.'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_community_fpc1-2.png'
    },
    {
      id: 'FPC2',
      title: 'Rural Health & Vet Services',
      desc: 'Services Providing essential veterinary care for calves and extending healthcare services to rural communities.',
      points: [
        'Provides veterinary care for the calves.',
        'Extends healthcare services to rural communities.',
        'Holistic development.'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_community_fpc2.png'
    },
    {
      id: 'FPC3',
      title: 'Healthy Calf Rearing',
      desc: 'Raising calves in a natural, healthy environment while creating employment for local youth.',
      points: [
        'Healthy environment growth for calves.',
        'Managed by local youth, creating employment opportunities.'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_community_fpc3-1.png'
    },
    {
      id: 'FPC4',
      title: 'Dairy Processing & Collection',
      desc: 'Collecting, processing, and delivering high-quality, organic dairy products to consumers.',
      points: [
        'Collects and processes milk from reared calves.',
        'Pure, organic dairy products for consumer markets.'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_community_fpc4-1.png'
    },
    {
      id: 'FPC5',
      title: 'Ethical Dairy Sales & Growth',
      desc: 'The Baap Company reinvests in rural sustainability by purchasing and selling dairy products from FPC 4.',
      points: [
        'Purchase dairy products from FPC 4.',
        'Revenue is reinvested into the growth.'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_community_fpc5.png'
    },
    {
      id: 'FPC6',
      title: 'Bio-Gas & Organic Fertilizers',
      desc: 'Transforming cow dung into renewable energy and chemical-free fertilizers for sustainable farming.',
      points: [
        'Convert cow dung into bio-gas for energy solutions.',
        'Produce organic fertilizers.',
        'Reduce chemical dependency for farmers.'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_community_fpc6-2.png'
    }
    ,
    {
      id: 'FPC7',
      title: 'Eco-Friendly Crop Protection',
      desc: 'Developing organic sprays to safeguard crops while eliminating harmful chemicals',
      points: [
        'Organic sprays for crop protection.',
        'Promotes sustainable farming by reducing chemical use.',
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_community_fpc7.png'
    }
  ];


   businessAreas = [
    {
      title: 'VEGETABLE FARMING',
      description: 'Our vegetable farming initiative focuses on growing a wide range of vegetables using sustainable farming practices.'
    },
    {
      title: 'Millets Farming',
      description: 'Our millets farming initiative aims to promote the cultivation of millets, which are nutritious and drought-resistant crops.'
    },
    {
      title: 'Fish Farming',
      description: 'Our fish farming initiative focuses on sustainable aquaculture practices to provide high-quality fish and seafood products.'
    },
    {
      title: 'Poultry Farm',
      description: 'Our poultry farm initiative aims to provide high-quality poultry products while promoting sustainable and humane farming practices.'
    },
    {
      title: 'Grocery Stores',
      description: 'Our grocery stores initiative aims to provide rural communities with access to high-quality groceries and essential products.'
    },
    {
      title: 'Healthcare Needs',
      description: 'Our healthcare initiative aims to provide rural communities with access to quality healthcare services and products.'
    },
    {
      title: 'Micro Business',
      description: 'Our micro business initiative aims to support small-scale businesses and entrepreneurs in rural areas.'
    }
  ];
    constructor(private el: ElementRef) { }

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
}
