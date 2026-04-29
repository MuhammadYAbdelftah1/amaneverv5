
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      header: {
        brandAr: 'أمان إيفر والرعاية الشاملة للخدمات الطبية',
        brandEn: 'AMAN EVER COMPANY & COMPREHENSIVE Care of Medical Services',
        home: 'Home',
        about: 'About Us',
        services: 'Our Services',
        features: 'Our Features',
        myBookings: 'My Bookings & Medical Consultations',
        merchantPlatform: 'Merchant Login Platform',
        amanDoctor: 'Doctor Login Platform',
        blog: 'Aman Blog',
        contact: 'Contact Us',
        login: 'Login',
        subscribe: 'Subscribe Now'
      },
      hero: {
        badge: 'AMAN EVER COMPANY & COMPREHENSIVE Care',
        slogan: 'Your need in an app, your world in a card',
        slides: [
          {
            title: 'AMAN EVER COMPANY & COMPREHENSIVE Care of Medical Services',
            description: 'All your medical, health, and cosmetic needs in one platform.. Save your time, and guarantee your quality.',
            message: 'Professional medical mediation and smart health solutions.',
            cta: 'Download the app now and start your health journey'
          },
          {
            title: 'Your Need in an App, Your World in a Card',
            description: 'Experience the future of healthcare with our integrated digital platform and smart electronic card.',
            message: 'Innovative digital health solutions that enhance quality of life.',
            cta: 'Join Aman Ever Now'
          },
          {
            title: 'Elite Doctors & Direct Care 24/7',
            description: 'Providing digital services and direct care from elite doctors around the clock for your safety.',
            message: 'The bridge between you and the best medical providers in the Kingdom.',
            cta: 'Start Your Consultation'
          },
          {
            title: 'Aman Ever Membership (Premier & VIP Cards)',
            description: 'Your gateway to direct discounts up to 80% on all medical and cosmetic services. Your health is more valuable with us.',
            message: 'Inclusivity and speed in one card.',
            cta: 'Get Your Card Now'
          },
          {
            title: 'Loyalty Program (Cashback)',
            description: 'Get cashback when purchasing the card or upon first use of services. Enjoy immediate financial returns to your wallet.',
            message: 'Savings that start from the first visit.',
            cta: 'Discover Cashback Benefits'
          },
          {
            title: 'Aman Points Wallet',
            description: 'Turn your medical bills into points and redeem them for service balance and exclusive gifts.',
            message: 'Every point equals a world of rewards.',
            cta: 'Join the Points World'
          },
          {
            title: 'Aman Ever Electronic Store',
            description: 'High-quality medical and cosmetic products at competitive prices and exclusive offers.',
            message: 'Shop smart and pay safely.',
            cta: 'Shop Now'
          },
          {
            title: 'Home Care Services: Integrated Medical Care in Your Home',
            description: 'Because your comfort is our priority, we provide an integrated medical team to offer the highest quality health services. Professional precision and rapid response for your safety.',
            message: '• Nursing Services\n• Elderly Care\n• Home Lab Tests\n• Physiotherapy\n• Safe Medical Cupping',
            cta: 'Discover Home Services'
          },
          {
            title: 'Home Visit Doctors',
            description: 'Access elite doctors across various specialties for home visits, avoiding hospital queues.',
            message: '1. Comprehensive Checkup\n2. Post-op Follow-up\n3. Clinical Plans\n4. Health Assessments\nWith accuracy, speed, and safety.',
            cta: 'Request a Home Visit'
          },
          {
            title: 'Aman Ever Premier Card',
            description: 'Your key to comprehensive medical, health, and cosmetic care at the lowest cost.',
            message: 'Savings for you and your family.. Integrated coverage for all medical needs with real discounts.',
            cta: 'Order Your Premier Card'
          },
          {
            title: 'Aman Ever VIP Card',
            description: 'The elite and strongest category in the world of healthcare and medical luxury.',
            message: 'Exceptional discounts, high-end benefits, and a unique treatment experience for those seeking ultimate savings and luxury.',
            cta: 'Order Your VIP Card'
          }
        ],
        discoverNetwork: 'Discover Network'
      },
      floating: {
        urgentConsultation: 'Urgent Consultation',
        membershipRequest: 'Membership Request'
      },
      actions: {
        booking: {
          title: 'Book Medical Appointment',
          desc: 'Book your appointment with the doctor easily'
        },
        card: {
          title: 'Electronic Card',
          desc: 'Your health card is always with you'
        },
        homeCare: {
          title: 'Home Care',
          desc: 'Our medical services reach your home'
        }
      },
      features: {
        subtitle: 'Why are we the best?',
        title: 'Competitive Advantages',
        items: [
          { title: 'Total Inclusivity without Restrictions', desc: 'Our services and cards are available to all segments of society (citizens, residents, and visitors), and for all ages and health conditions without any restrictions or exceptions.' },
          { title: 'Wide and Easy Coverage', desc: 'We provide you with comprehensive geographical coverage without credit limits, and most importantly: our services do not require any prior approvals from the company.' },
          { title: 'Super Ease and Speed', desc: 'Instant issuance of the electronic card in a few seconds via the app, with a customer service team available to serve you around the clock.' },
          { title: 'Fast Medical Response (First Question Free)', desc: 'We guarantee you super fast response and replies within a maximum of 15 minutes in the "Ask a Doctor" service, and because your health matters to us, we made your first question and consultation completely free.' },
          { title: 'Medical Bookings & Instant Consultations', desc: 'Book your medical appointment and get an instant consultation with elite doctors in just seconds via the app.' },
          { title: 'Home Care Services', desc: 'Specialized nursing services, elderly care, home laboratory tests, physical therapy, and cupping; we bring an integrated medical team to your home.' },
          { title: 'Financial Benefits and a World of Savings', desc: 'We give you direct discounts up to 80%, in addition to cashback and an integrated points wallet within the loyalty program.' },
          { title: 'Flexible and Easy Payment Options', desc: 'We support all electronic payment methods, in addition to providing convenient installment payment services via (Tabby and Tamara) to facilitate your access to care.' },
          { title: 'Transparency and Reliability', desc: 'We believe in absolute transparency, as the app allows you to view real ratings of services and medical facilities by customers so you can make your decision with peace of mind.' }
        ],
        cta: 'Enjoy all these features now.. Download the Aman Ever app',
        servicesTitle: 'Our Services Package',
        servicesSubtitle: 'Innovative health solutions designed for your comfort and safety',
        searchPlaceholder: 'Search for the required service...',
        noResults: 'No services match your search',
        showAll: 'Show all services',
        services: [
          { name: 'Aman Ever Membership (Premier & VIP Cards)', desc: 'Your gateway to direct discounts up to 80% on all medical and cosmetic services. Issue your electronic card instantly via the app in seconds.' },
          { name: 'Loyalty Program (Cashback)', desc: 'Get cashback when purchasing the card or upon first use of services. Enjoy immediate financial returns to your wallet.' },
          { name: 'Aman Points Wallet', desc: 'Collect your points with every purchase invoice and redeem them for a service balance for your future purchases' },
          { name: 'Instant Bookings & Consultations', desc: 'Book appointments with elite doctors without waiting. Online consultations via voice and video calls, or via "Ask a Doctor" (chat) service with guaranteed response speed.' },
          { name: 'Home Care Services', desc: 'We provide you with elite doctors in various specialties and specialized nursing services for home visits, saving you the trouble of waiting in hospitals.\nElderly care + home lab tests + physical therapy and cupping provided by an integrated team at your home' },
          { name: 'Aman Electronic Store', desc: 'A diverse store gathering medical and cosmetic products and services at discounted prices and non-stop exclusive offers.' },
          { name: 'Wide Medical Network', desc: 'Direct access to a wide network of hospitals, specialized centers, and pharmacies across the Kingdom.' },
          { name: 'Health & Wellness Network', desc: 'An integrated network including fitness clubs, sports clubs, and wellness centers for a healthier life.' }
        ],
        modals: {
          membership: {
            title: 'Aman Ever Membership (Premier & VIP)',
            content: 'About Inclusivity: "Aman Ever.. because your health is indivisible, we have gathered all medical, cosmetic, and preventive services for you in one card."\n\nAbout Speed: "With the click of a button.. we shorten the distances for you. Your appointments are booked, your consultations are ready, and our care reaches you wherever you are."\n\nAbout Trust: "From routine checkups to major surgeries; Aman Ever is your loyal partner in all stages of your health journey."\n\nMedical and Surgical Care and Surgeries: Full coverage for operations (major, medium, and minor) with the highest standards of precision.\n\nMaternity and Childhood: Integrated care including delivery operations (natural and cesarean) and pregnancy follow-up.\n\nChronic Diseases: Includes dialysis services and follow-up of critical cases.\n\nComprehensive Examinations: Medical checkups in all specialties, and laboratory and radiology services.\n\n[ Beauty and Care World ]: Dentistry: From periodic checkups to cosmetic and Hollywood smile. Laser and Beauty: The latest laser technologies, skin care, and specialized cosmetic operations.\n\n[ Digital and Home Services ]: Consultations at the click of a button: Book your appointment or get your medical consultation online in seconds. Home Care: An integrated medical staff reaches your doorstep with precision and safety.\n\nSuper ease and speed: Instant issuance of the electronic card in a few seconds via the app, with a customer service team available to serve you around the clock.\n\nEmergency and Urgent Care: Immediate response to cases that cannot wait.\n\nWhy do thousands choose the Aman Ever card? Because it is the only membership that gives you: Absolute inclusivity: Covers everything, from a laser session to heart surgeries and dialysis. Smart solutions: An online booking and consultation system that saves you the trouble of waiting. Home care: Professional medical services in the privacy of your home. Emergency support: Urgent care available at any time and from anywhere.',
            buttons: ['Aman Ever Card: Care that rewards you! Buy the card: and get the membership']
          },
          cashback: {
            title: 'More Affordable Health.. from the First Visit',
            content: 'With the loyalty program from Aman Ever, your medical payments return to you! When you buy the card, we give you the cashback advantage to use in your first purchase at our medical partners. Start your health journey with intelligence and savings.',
            mechanism: ['Benefit from Cashback: Direct cash discount upon first use in medical facilities.', 'Save more: Start an exceptional health experience from the first moment.']
          },
          points: {
            title: 'Smart Points Wallet',
            content: 'Join the world of rewards with the smart points wallet loyalty program. Every purchase you make turns into points in your balance to give you a service balance and exclusive gifts on your future purchases',
            mechanism: [
              'Buy / Order your services or products',
              'Collect / Points are added immediately to your wallet',
              'Save / Use them as a service balance discount and exclusive gifts for your future purchases.'
            ]
          },
          bookings: {
            title: 'Instant Bookings & Consultations',
            content: 'Care across borders; we eliminate distances to put the best medical competencies at your service.\n\nSecure, encrypted, and certified consultations.. because your privacy is our top priority.\n\nA smart system that combines diagnostic accuracy and ease of access, for a healthier lifestyle.\n\nYour pulse matters to us: Instant medical consultation for emergency cases around the clock.\n\nGoodbye to waiting rooms: Talk to your specialist doctor now without prior appointments.\n\nHealth safety in your hands: Fast response, accurate diagnosis, and complete privacy.\n\nYour care doesn\'t wait.. Instant medical consultations and confirmed bookings with one click.\n\nYour doctor is with you.. wherever you are and at any time. Integrated healthcare via your screen.\n\nBecause health does not accept delay; we connect you with elite doctors at any time and from anywhere.',
            buttons: ['Consult your doctor now', 'Book your appointment with a click', 'Start the care journey']
          },
          homeCare: {
            title: 'Home Care Services',
            content: 'All your health needs reach you wherever you are. Integrated home care services, executed with professional precision, speed in response, and complete safety for you and your family.'
          },
          store: {
            title: 'Aman Ever Electronic Store',
            content: 'Aman Ever Store.. a world of options, quality we bet on, and prices that compete with expectations.\n\nEverything you need in one place; Aman Ever Store brings you diversity, quality, and ease of access.\n\nAman Ever: Your one-stop shop for services and products designed to elevate your lifestyle with the best value.\n\nShop with a touch, and pay smoothly: We have provided you with the latest and easiest secure payment methods, to enjoy a hassle-free shopping journey.\n\nFrom selection to arrival.. endless ease: Simple interface, fast payment, and customer service that always puts you first.\n\nAman Ever.. Shop smart, pay safely: An integrated digital experience that gives you confidence in every step.'
          },
          'medical-network': {
            title: 'Wide Medical Network',
            content: 'Direct access to a wide network of hospitals and specialized centers across the Kingdom. We provide you with the best medical competencies with discounts up to 80%.'
          },
          'health-network': {
            title: 'Health & Wellness Network',
            content: 'An integrated network including fitness clubs, sports clubs, and wellness centers. Enjoy a healthy lifestyle with exclusive offers for Aman Ever members.'
          },
          cta: 'Start the experience now.. Download the app'
        }
      },
      about: {
        subtitle: 'Who Are We?',
        title: 'Your Smart Partner in the Medical Care Journey',
        desc: 'We are Aman Ever Company and Comprehensive Care for Medical Services, a leading Saudi technical platform specialized in technical and marketing mediation. We manage an integrated digital system and smart applications designed specifically to keep pace with the health digital transformation according to Saudi Vision 2030. We work passionately to be the technical bridge that connects you with an elite group of medical, health, and cosmetic service providers in the Kingdom, providing comprehensive and innovative care solutions that redefine the concept of digital health services by integrating innovation with the highest quality standards.',
        visionSection: {
          subtitle: 'Our Vision & Services',
          desc: 'To be the leading platform in medical marketing and digital healthcare in the Kingdom of Saudi Arabia and the Arab region, and an active contributor to achieving the goals of Saudi Vision 2030 in health and technical transformation. We also seek at Aman Ever to bring about a qualitative shift in the health sector within the Kingdom of Saudi Arabia, by exploiting the latest technologies to transform the healthcare experience into a comprehensive and seamless digital system.',
          services: [
            'Telemedicine: Providing medical consultations and scheduling appointments with ease.',
            'Home Services: Providing healthcare services at the beneficiary\'s residence.',
            'E-Store: An integrated platform to buy medical products and services at discounted prices.',
            'Smart Financial Solutions: Providing fixed offers and discounts, with the activation of the "Cashback" program and points wallet to enhance value for the user within a certified regulatory framework.',
            'Technical connection with medical service providers and support entities to ensure service smoothness.',
            'Supporting medical facilities in digital access and improving the beneficiary experience.'
          ]
        },
        mission: {
          title: 'Our Mission',
          desc: 'We seek to be a safe bridge connecting the community with medical and cosmetic services, by facilitating easy and reliable access with the highest standards of quality and technology. We are committed to elevating the patient experience by integrating technology with direct care, and providing exclusive financial benefits that give our customers (the power of saving and excellence) at all times.'
        },
        identitySection: {
          subtitle: 'Our Identity & Values',
          desc: 'We are the pioneers in integrating technology with medical care to facilitate your access to the best services, driven by a set of values that form the core of our work:',
          values: [
            'We put human health first and comfort at the heart of everything we provide.',
            'Clarity and Respect: We deal with everyone transparently and respectfully, because trust is the basis of every successful relationship.',
            'Simplified Innovation: We always strive to provide innovative medical services that make care closer and easier for everyone.',
            'Safe Experience: We are committed to providing a medical experience you can rely on with safety and peace of mind.',
            'Partnership in Service: We believe that working together and building strong partnerships is the way to achieve the best possible service.'
          ]
        }
      },
      network: {
        title: 'Aman Wide Network',
        medicalTab: 'Medical Network',
        healthTab: 'Health Network',
        medical: [
          { title: 'Major Hospitals', desc: 'Strategic partnerships with the finest and largest hospitals in the Kingdom' },
          { title: 'Specialized Complexes & Clinics', desc: 'Integrated medical centers in all neighborhoods and cities of the Kingdom' },
          { title: 'Teeth, Dermatology & Cosmetics', desc: 'Comprehensive care for skin, teeth, and aesthetic services' },
          { title: 'Eyes & Laser', desc: 'Advanced vision correction and eye health specialty centers' },
          { title: 'Physical Therapy', desc: 'Rehabilitation and specialized physiotherapy programs' },
          { title: 'Medical Supplies', desc: 'Highest quality equipment and home medical supplies' },
          { title: 'Certified Pharmacies', desc: 'Secure network for all your pharmaceutical needs 24/7' },
          { title: 'Full Lab & Imaging', desc: 'Access to all medical tests, imaging, and diagnostic labs' },
          { title: 'Maternity Care', desc: 'Integrated programs for pregnancy follow-up and maternal health' },
          { title: 'Surgical Operations', desc: 'Coverage for all types of major and minor surgeries' }
        ],
        health: [
          { title: 'Healthy Nutrition & Supplements', desc: 'Customized nutritional plans and high-quality supplements' },
          { title: 'Sports & Fitness Clubs', desc: 'Exclusive access to premium gyms and fitness centers' },
          { title: 'Optical Centers', desc: 'Leading providers for eyewear, contacts, and vision care' },
          { title: 'SPA & Massage', desc: 'Luxury wellness, relaxation, and physiotherapy massage services' }
        ]
      },
      nearbyProviders: {
        title: 'Service Providers Near You',
        subtitle: 'Find the best medical, health, and cosmetic services around your location',
        categories: {
          all: 'All',
          hospitals: 'Hospitals',
          clinics: 'Clinics',
          pharmacies: 'Pharmacies',
          beauty: 'Beauty Centers'
        },
        viewMap: 'View on Map',
        bookNow: 'Book Now',
        distance: 'km away'
      },
      discounts: {
        title: 'Strongest Exclusive Discounts',
        subtitle: 'Special and exclusive offers for Aman Ever subscribers only',
        viewAll: 'View All',
        discount: 'Discount',
        shareSuccess: 'Offer shared successfully!',
        copySuccess: 'Offer link copied to clipboard!',
        shareError: 'Sorry, sharing could not be completed.',
        cta: 'Get the offer now via the app'
      },
      nearby: {
        liveCenter: 'Live Monitoring Center',
        title: 'Aman Live',
        subtitle: 'Instant Smart Coverage',
        unitDistribution: 'Unit Distribution',
        activeProviders: 'Active Medical Providers',
        logsTitle: 'Live Operations Log',
        searchPlaceholder: 'Search for unit (Ambulance, Hospital, Doctor)...',
        trackingUnits: 'Tracking {{count}} Units',
        activeDetection: 'Active Detection System',
        scanningProtocol: 'Location Protocol',
        scanningLabels: ['Initializing...', 'Scanning Network...', 'Syncing Data...', 'Ready'],
        legend: {
          center: 'Medical Center',
          ambulance: 'Mobile Ambulance',
          doctor: 'Consultant Doctor'
        },
        startScan: 'Start Comprehensive Scan',
        noResults: 'No results found',
        noResultsDesc: 'Try searching for another unit',
        detectionSystem: 'Detection System',
        protocolTitle: 'Scanning Protocol',
        fieldLogs: 'Field Logs',
        distribution: 'Asset Distribution',
        geoNotSupported: 'Geolocation is not supported by your browser',
        geoSuccess: 'Location retrieved successfully',
        geoError: 'Could not retrieve your location',
        scanSteps: ['Initializing...', 'Scanning Network...', 'Syncing Data...'],
        logs: ['Emergency call received', 'Ambulance dispatched', 'Patient arrived at hospital'],
        randomLogs: ['Unit AE-04 moving to North', 'MC-JED-01 status: Active', 'AE-12-RESCUE on standby', 'AE-PRO-DR consultation started', 'MC-NORTH maintenance check']
      },
      blog: {
        title: 'Aman Blog',
        subtitle: 'Latest Trusted Health News & Tips',
        readMore: 'Read More',
        source: 'Source:',
        posts: [
          {
            id: 1,
            title: 'Importance of Regular Checkups in Early Disease Detection',
            summary: 'Periodic medical examinations are the cornerstone of maintaining public health, helping to discover health problems in their early stages.',
            category: 'Public Health',
            date: '2024-04-10',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
            sourceName: 'World Health Organization (WHO)',
            sourceUrl: 'https://www.who.int'
          },
          {
            id: 2,
            title: 'Digital Health Transformation in Saudi Vision 2030',
            summary: 'How modern technologies and digital platforms like "Aman Ever" contribute to achieving health transformation goals.',
            category: 'Health Tech',
            date: '2024-04-12',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
            sourceName: 'Saudi Ministry of Health',
            sourceUrl: 'https://www.moh.gov.sa'
          },
          {
            id: 3,
            title: '5 Golden Tips for Maintaining Heart and Vascular Health',
            summary: 'Learn about the dietary and exercise habits recommended by experts to strengthen the heart muscle.',
            category: 'Prevention',
            date: '2024-04-14',
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
            sourceName: 'American Heart Association',
            sourceUrl: 'https://www.heart.org'
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about the Aman Ever app, services, and smart cards',
        moreQuestions: 'Do you have more inquiries?',
        contactSupport: 'Contact us via WhatsApp: 920018041',
        tabs: {
          general: 'General FAQs',
          cardholders: 'Aman Ever Cardholder FAQs'
        },
        cardDetails: {
          premier: {
            title: 'Aman Ever Premier Card 🛡️',
            intro: 'What is the Aman Ever Premier Card? It is your key to obtaining integrated medical, health, and cosmetic care at the lowest costs. This card was designed to provide you and your family with wide and comprehensive coverage for all medical needs with real and immediate discounts.',
            servicesTitle: 'Included Services:',
            servicesDesc: 'The card grants you discounts up to 50% on a long list of services, including:',
            services: [
              'Medical Services: Checkups, laboratory analyses, and radiology.',
              'Dentistry: All dental treatments and cosmetic dentistry.',
              'Surgical Operations: Major, medium, and minor surgeries.',
              'Maternity & Child: Natural and cesarean delivery cases.',
              'Cosmetic World: All cosmetic services, laser, and skincare.',
              'Its discounts also include all medical, health, and cosmetic services and products without exception.'
            ],
            benefitsTitle: 'Exclusive Features of Aman Ever Premier Card:',
            benefits: [
              'Cash Back Loyalty Program: Upon subscription, you receive a cash balance in your wallet to be used as a direct discount on your first purchase.',
              'Aman Points Wallet: Every time you use the card, you collect points that you can exchange for a free service balance at the same facility.',
              'Smart App Services: Ability to book appointments, consult a doctor via video, and request home care services at reduced prices.',
              'E-Store: Shop for medical, health, and cosmetic products at exclusive prices via our app.',
              'Absolute Flexibility: No restrictions on age or health condition, and no need to wait for prior approvals.',
              'Available to Everyone: Includes citizens, residents, and visitors (subject to valid identification documents).'
            ]
          },
          vip: {
            title: 'Aman Ever VIP Card 🌟',
            intro: 'What is the Aman Ever VIP Card? It is the elite and strongest category in the world of healthcare, designed for those seeking the maximum levels of savings and medical luxury. This card gives you massive discounts and free benefits that make your treatment journey a unique experience.',
            servicesTitle: 'Included Services:',
            servicesDesc: 'Comprehensive and superior coverage with discounts up to 80% on:',
            services: [
              'All medical, health, and diagnostic services.',
              'All cosmetic procedures, surgeries, and laser treatments.',
              'Dental services, maternity, and surgeries of various types.'
            ],
            benefitsTitle: 'Exclusive Features and Free Services:',
            benefits: [
              'Free VIP Gifts: Enjoy 5 free medical bookings with doctors, in addition to the "Ask a Doctor" service for 5 free consultations.',
              'Strongest Cash Back: A one-time welcome cash balance used for the first purchase to give you a strong savings boost from the start.',
              'Golden Points Wallet: This category grants you twice as many points as other categories with every transaction, to be quickly exchanged for free services.',
              'Digital & Home Care: Booking appointments, video consultations, and home care services at very reduced prices, with the ability to order from the e-store at VIP prices.',
              'Instant & Prior Approval: You don\'t need to wait! Your approval is ready in advance from the company just by holding the card.',
              'Comprehensive & Unrestricted: Available to all groups (citizen, resident, visitor) regardless of age or health status.'
            ]
          }
        },
        sections: {
          general: [
            {
              q: 'Do I need an Aman Ever card to use the app?',
              a: 'Not at all! The Aman Ever app is a health platform open to everyone. You can download the app and benefit from all its digital services, such as booking appointments, video consultations with doctors, requesting home care, and shopping from the medical e-store, even without owning a membership card.'
            },
            {
              q: 'What is the difference between using the app with or without an Aman Ever membership card?',
              a: 'The app provides you with access and convenience, while the card saves you money. Without the card, you will receive services and products at their regular prices. When you own a card (Premier or VIP), you unlock a gateway of major discounts up to 80%, in addition to Cash Back, a points system, and free benefits.'
            },
            {
              q: 'Can I purchase from the e-store if I am not subscribed to one of the cards?',
              a: 'Yes, the store is available to all app users for shopping for the finest medical and cosmetic products. However, Aman Ever cardholders receive "special and exclusive prices" and Cash Back offers that do not appear to the regular user, making the shopping experience with the card smarter and more economical.'
            },
            {
              q: 'I am a visitor and need home care service, can I order via the app?',
              a: 'Certainly, our digital services (home care, appointment booking, video consultation) are available to all app users—citizens, residents, and visitors. The card is an additional option available to you if you wish to obtain these services at very reduced prices instead of the full price.'
            },
            {
              q: 'Why do many prefer to upgrade their accounts and acquire an Aman Ever card?',
              a: 'Because the card turns your "health expenses" into an "investment." While everyone enjoys the ease of use via the app, cardholders uniquely benefit from Cash Back and loyalty points that turn into free services, as well as direct discounts that always keep the cost of medical and cosmetic care within reach.'
            }
          ],
          cardholders: [
            {
              title: 'First: Frequently Asked Questions for Aman Ever Cardholders',
              items: [
                {
                  q: 'Who can benefit from Aman Ever cards?',
                  a: 'Our cards are designed for everyone, including citizens, residents, and visitors. All you need is a valid ID or official documentation to enjoy all the discounts and benefits.'
                },
                {
                  q: 'Are there restrictions related to age or health status before subscribing?',
                  a: 'Never. Aman Ever cards are characterized by not being restricted to a certain age or a specific health condition. They also do not require a medical examination before subscribing or prior approvals from the company; approval is considered pre-existing for all cardholders.'
                }
              ]
            },
            {
              title: 'Second: Questions about Discounts and Services',
              items: [
                {
                  q: 'What is the fundamental difference between the "Premier" card and the "VIP" card?',
                  a: 'The difference lies in the savings ceiling and free benefits; the Premier card gives you discounts ranging from 20% to 50%, while the VIP card gives you massive discounts ranging from 30% to 80%, in addition to free services including 5 medical bookings and 5 "Ask a Doctor" consultations completely free in our digital app.'
                },
                {
                  q: 'Does the card include major surgeries and maternity?',
                  a: 'Yes, the cards cover all medical levels starting from checkups and labs, all the way to surgical operations (major, medium, and minor) and natural and cesarean delivery cases with direct discounts.'
                },
                {
                  q: 'Can I use the card in cosmetic and laser centers?',
                  a: 'Certainly, Aman Ever discounts include all cosmetic services, laser procedures, and skincare in our certified centers.'
                }
              ]
            },
            {
              title: 'Third: Questions about Financial Features and Loyalty Programs',
              items: [
                {
                  q: 'How do I benefit from the "Cash Back" feature when subscribing?',
                  a: 'When your membership is activated, you receive a welcome cash balance in your electronic wallet. You can use this balance as a financial discount on your first purchase of our services, which means immediate savings from the first moment.'
                },
                {
                  q: 'What is the "Aman Points" system and how is it redeemed?',
                  a: 'It is a rewards system where you earn points for every purchase. These points accumulate in your app wallet and can be converted into a service balance to get free medical or health services at the same facility.'
                }
              ]
            },
            {
              title: 'Fourth: Questions about Digital Services and the App',
              items: [
                {
                  q: 'What services does the "Aman Ever" app provide for cardholders?',
                  a: 'The app provide a smart care experience including: booking an appointment with a doctor, remote "video" medical consultation, requesting home care services, and shopping from the integrated medical e-store. All this at reduced prices for Aman Ever cardholders.'
                },
                {
                  q: 'Can I buy medical products via the app with the card?',
                  a: 'Yes, the app includes an e-store containing various medical, health, and cosmetic products, and cardholders (especially VIP) get exclusive and reduced prices when ordering through it.'
                }
              ]
            },
            {
              title: 'Fifth: Technical and Contact Questions',
              items: [
                {
                  q: 'How do I get approval when going to a hospital or medical center?',
                  a: 'With Aman Ever, there is no need to wait! Your card carries instant and prior approval. Once you present the card or ID at a participating health facility, your discount is activated directly without any administrative complications.'
                }
              ]
            },
            {
              title: 'Sixth: Corporate and Institutional Packages (Success Partners)',
              items: [
                {
                  q: 'Does "Aman Ever" provide special offers for companies and institutions?',
                  a: 'Yes, we believe the employee is the real capital, so we provided flexible packages starting from 199 SAR per card, with amazing progressive discounts as the number of employees increases:\n• From 10 employees: price drops to 150 SAR per card.\n• From 20 employees or more: the employee gets the card at an exceptional price of only 99 SAR.'
                },
                {
                  q: 'Can company employees get "VIP" features at special prices?',
                  a: 'Certainly, we provided the elite package for employees with major discounts. While the individual VIP card value is 499 SAR, companies get preferential prices:\n• For 10 employees: price drops to 300 SAR per individual.\n• For 20 employees or more: the employee gets all VIP benefits for 250 SAR only.'
                }
              ]
            },
            {
              title: 'Seventh: Family and Premium Packages',
              items: [
                {
                  q: 'What saving options are available for families?',
                  a: 'We provided you with the Family Package (Premier) covering 4 individuals for only 999 SAR. And because we care about all your family members, any additional member (beyond the 5th) is added for only 99 SAR per card.'
                },
                {
                  q: 'Are there specific packages for fewer members with additional benefits?',
                  a: 'Yes, we launched packages to suit everyone:\n• Premium Package: Includes 3 individuals for 599 SAR.\n• Gold Package: The best choice for groups of 4 to 6 individuals for 999 SAR.'
                }
              ]
            },
            {
              title: 'Eighth: Social Responsibility and Appreciation (Special Care Packages)',
              items: [
                {
                  q: 'How does "Aman Ever" support the elderly in their health journey?',
                  a: 'In appreciation of our fathers and mothers, we dedicated an elderly package at a very reduced price of 199 SAR per individual, ensuring they receive the best health and cosmetic care without financial burden.'
                },
                {
                  q: 'What facilities are provided for widows and divorcees?',
                  a: 'To support their health stability, we provided a special package for widows and divorcees giving them all Aman Ever card benefits at a symbolic value of only 99 SAR per individual.'
                },
                {
                  q: 'Are there free packages for specific groups?',
                  a: 'Yes, from our religious and social responsibility, we are honored to provide the Aman Ever card completely free (100%) to:\n• Memorizers of the Holy Quran.\n• Orphans.'
                }
              ]
            },
            {
              title: 'Ninth: Card Types and Subscriptions',
              items: [
                {
                  q: 'What card do I receive when I subscribe to one of the various "Aman Ever" packages?',
                  a: 'When you choose any of our dedicated packages (such as corporate, family, elderly, or free packages for orphans and Quran memorizers), an Aman Ever Premier card is issued for every individual included in the package.'
                },
                {
                  q: 'Why is "Premier" the approved choice for our packages?',
                  a: 'Because it is the most flexible and widespread card, giving you a perfect balance between a saving price and comprehensive services with discounts up to 50%, in addition to automatically entering the Cash Back program and Aman points system. We adopt it in our packages to make qualitative healthcare truly available to everyone at the best prices.'
                },
                {
                  q: 'And what about the Aman Ever VIP card?',
                  a: 'The VIP card remains the exclusive independent category, designed for those who wish to upgrade their health experience to the maximum extent possible with discounts up to 80% and additional free benefits (such as free consultations and checkups). You can always request to upgrade your subscription to the VIP category if you are looking for the highest luxury and savings.'
                }
              ]
            },
            {
              title: 'Tenth: Loyalty Program (Cash Back)',
              items: [
                {
                  q: 'What is the Aman Ever Loyalty Program (Cash Back) and how do I benefit from it?',
                  a: 'Answer: The Loyalty Program is a smart and innovative system designed specifically to ensure your financial savings from the first moment of your Aman Ever membership. It is our own innovation to ensure you are a benefiting and saving member from the first moment. As soon as you subscribe to one of the "Aman Ever" cards or packages, we grant you a Cash Back balance in your electronic wallet within the app as a welcome gift.\n\nYou can use this balance as a service balance only for one time at your first purchase in any of the following areas:\n• Field Visits: Use it as a direct financial discount upon the first use of the card at our approved medical, health, or cosmetic facilities.\n• Digital Services: Apply it when booking an appointment with a doctor, requesting a "video consultation," or urgent medical consultations via the app.\n• Home Care: Use it when requesting home healthcare packages and services.\n• Smart Shopping: Use it as cash payment when ordering products and services from the integrated e-store within the "Aman Ever" app.\nWith Aman Ever, your subscription returns to you immediately in the form of services and savings!'
                }
              ]
            },
            {
              title: 'Eleventh: Geographic Scope and Validity',
              items: [
                {
                  q: 'Where can I use the Aman Ever card? Is it limited to a specific city?',
                  a: 'Aman Ever is designed to be with you wherever you are! You can use the card in a wide and growing network of hospitals, medical complexes, beauty centers, and certified labs in various cities. Also, our digital services (video consultations and store) serve you anywhere and anytime via the app, making healthcare always within your reach.'
                },
                {
                  q: 'What is the validity period of the Aman Ever card? And how can I renew it?',
                  a: 'The Aman Ever card (Premier or VIP) gives you a full year (12 months) of unlimited savings and premium care from the date of its issuance. Before your subscription expires, we will remind you via the app to easily renew your membership with a single click to ensure you continue to enjoy discounts and benefits.'
                },
                {
                  q: 'If I own an individual card, can I add family members later?',
                  a: 'Certainly! We believe in service flexibility. You can always upgrade your subscription from individual to one of our saving family or gold packages via the app, or add new members at reduced fees, so you can all enjoy Aman Ever discounts under one subscription umbrella.'
                },
                {
                  q: 'What should I do if the printed card is lost?',
                  a: 'Don\'t worry, with the Aman Ever app, your card is always "digital"! Even if you lose the plastic card, you can present the digital version within the app at any medical facility and get your discount immediately. You can also request a replacement for the printed card by contacting customer service.'
                },
                {
                  q: 'Is there a maximum limit for using the card during the year?',
                  a: 'There are no limits to our ambition in caring for you! You can use the Aman Ever card an unlimited number of times throughout the validity of the subscription. Whether you need to visit the doctor once or dozens of times, your discounts are fixed and continuous at every visit.'
                }
              ]
            },
            {
              title: 'Twelfth: Activation and Digital Services',
              items: [
                {
                  q: 'I purchased the card through the website, how do I start using it?',
                  a: 'Activating the "Aman Ever" card is a simple process done in minutes:\n1. Download the App: Download the Aman Ever app from the app store (iOS or Android).\n2. Login: Use the mobile number you used when purchasing.\n3. Activate Membership: You will find your digital card waiting for you in your profile, and from here you can start booking appointments and using the welcome "Cash Back" balance immediately.'
                },
                {
                  q: 'How do "Video Consultation" or "Urgent Consultations" services in the app benefit me?',
                  a: 'This service is designed for your convenience and speed of response; it allows you to:\n• Video Consultation: Speak with a specialist face-to-face while you are at home to explain your condition and get medical guidance.\n• Urgent Consultations: Fast response to your emergency medical inquiries at any time.\n• Save Time: Instead of waiting in clinics for simple cases, you can get your consultation at the click of a button and at a very reduced price for cardholders.'
                },
                {
                  q: 'What are "Home Care" services and how do I request them?',
                  a: 'We bring healthcare to your doorstep! This service includes (doctor and nurse visits, sample collection, physiotherapy, etc.). You can request these packages via the app, and if you hold an Aman Ever card, you will get these field services at exclusive and very special prices.'
                },
                {
                  q: 'Is my medical data and consultation history in the app secure?',
                  a: 'Your privacy is our top priority. The "Aman Ever" app uses the highest standards of encryption and security to ensure the confidentiality of your medical data. No entity can view your consultations or medical history except the specialized doctors you choose to contact.'
                }
              ]
            },
            {
              title: 'Thirteenth: Immediate and Field Use',
              items: [
                {
                  q: 'Can I start using the card immediately after subscribing inside the app only, or can I use it in facilities directly?',
                  a: 'You have total freedom in that! Once the subscription process is completed, in Aman Ever packages your card is available "digitally" immediately within the app, and your membership becomes active immediately without need to wait. You can start using it in both directions:\n1. Direct Field Use: You can immediately head to any hospital, medical center, or beauty center within our network, and present the digital or plastic card (with your ID or passport) to the receptionist to get the direct discount and field services.\n2. Digital Use within the App: You can at the same moment benefit from all app advantages such as booking appointments, video consultations, requesting home care, or shopping from our medical store at your exclusive member prices.'
                }
              ]
            },
            {
              title: 'Fourteenth: Dashboard and Account Details',
              items: [
                {
                  q: 'Will I find my subscription details, points, cash back, and bills inside my account immediately after activating membership?',
                  a: 'Absolutely! The Aman Ever app is designed to be your "personal administrative and financial assistant". Once your account is established and your subscription in any of our packages is activated, your account turns into a smart and comprehensive dashboard where you will find:\n• Digital Wallet: You will find the welcome "Cash Back" balance waiting for you to use in the first transaction, in addition to the "Aman Points" balance that grows with every use.\n• Purchase History: A detailed list of all the services you received and products you bought, to be fully aware of all your movements.\n• Digital Billing Center: You can access all your bills and payment vouchers electronically at any time, eliminating the need to keep traditional papers and ensuring your right and documentation of your health expenses.\n• Membership Details: You will find your card type (Premier or VIP) and its expiry date to manage it with ease.'
                }
              ]
            }
          ]
        }
      },
      footer: {
        desc: 'Your trusted partner in healthcare. We provide you and your family with the best medical services at one touch via our innovative app.',
        cr: 'Commercial Register: 7038166471',
        quickLinks: 'Quick Access',
        links: {
          about: 'About Aman Ever',
          services: 'Our Medical Services',
          features: 'Our Features',
          myBookings: 'My Bookings & Medical Consultations',
          network: 'Medical & Health Network',
          doctorPlatform: 'Doctor Login Platform',
          merchantPlatform: 'Merchant Platform',
          homeCare: 'Home Care Services',
          amanCards: 'About Aman Ever Cards & Packages',
          privacy: 'Privacy & Data Policy'
        },
        contactUs: 'Contact Us',
        downloadApp: 'Download App',
        address: 'Jeddah, Al-Baghdadiyah Al-Sharqiyah – Al-Baghdadiyah Plaza Building',
        customerService: 'Customer Service Number',
        whatsapp: 'WhatsApp',
        landline: 'Landline',
        rights: '© {{year}} AMAN EVER COMPANY & COMPREHENSIVE Care of Medical Services. All rights reserved.',
        terms: 'Terms and Conditions',
        dataPolicy: 'Data Policy',
        privacy: 'Privacy Policy',
        social: {
          facebook: 'Follow us on Facebook',
          instagram: 'Follow us on Instagram',
          snapchat: 'Add us on Snapchat',
          tiktok: 'Follow us on TikTok',
          x: 'Follow us on X',
          linkedin: 'Connect with us on LinkedIn',
          youtube: 'Subscribe to our YouTube channel'
        }
      },
      bookingsModal: {
        title: 'Your Instant Window to Elite Doctors',
        description: 'Experience a new level of healthcare with the Aman Ever booking system. We\'ve made it faster and more intuitive than ever, so you can focus on your health, not the waiting room. Discover the seamless experience through our app:',
        features: [
          { title: 'Instant & Confirmed Bookings', desc: 'Book appointments in seconds via voice or video calls with top-tier consultants.' },
          { title: 'Doctors Available 24/7', desc: 'Access expert medical care anytime, anywhere. Our doctors are always ready for you.' },
          { title: '"Ask a Doctor" Service', desc: 'Get quick, reliable medical answers via instant chat in less than 15 minutes.' },
          { title: 'Medical Insurance Support', desc: 'Seamlessly integrate your insurance for direct, hassle-free bookings.' },
          { title: 'Transparent Ratings', desc: 'Choose with confidence based on real feedback from our community of patients.' },
          { title: 'Manage Appointments Easily', desc: 'Track, reschedule, or cancel your appointments with a single tap.' }
        ],
        cta: 'To ensure the highest level of data security and provide you with the smoothest booking experience, our system is available exclusively through the Aman Ever app.',
        mainBtn: 'Download the App Now for a Seamless Booking Experience'
      },
      doctorPlatform: {
        title: 'Aman Doctor Platform: Technology that Serves the Patient.. and Empowers the Doctor',
        intro: 'Behind every successful consultation and easy booking in Aman Ever, stands a sophisticated control panel carefully designed to be the perfect link between the doctor and their patient.',
        patientColumn: {
          title: 'For Patients & Clients 🩺',
          features: [
            { title: 'Your Health in Organized Hands', desc: 'Thanks to the precise appointment management system, we guarantee no delays and providing care at its scheduled time.' },
            { title: 'Your Medical File is Safe & Available', desc: 'The system keeps your records and prescriptions electronically, so your doctor can follow your health history with the click of a button.' },
            { title: 'Uninterrupted Communication', desc: 'A built-in messaging system allows your doctor to stay in touch with you to follow up on your condition and answer your inquiries.' },
            { title: 'Quality Measured by Numbers', desc: 'We monitor performance constantly; the doctor\'s dashboard tracks "average waiting time" and "patient satisfaction rate" to ensure you get an exceptional experience (rated 4.8/5).' }
          ]
        },
        doctorColumn: {
          title: 'For Doctors & Care Providers 💼',
          features: [
            { title: 'Your Integrated Digital Clinic', desc: 'Manage your appointments, review records, and issue prescriptions with ease and flexibility from one screen.' },
            { title: 'Continuous Growth of Your Patient Base', desc: 'Track your total number of patients and growth rate easily, and stay in constant contact with them to enhance their loyalty.' },
            { title: 'Transparent Financial Dashboard', desc: 'Track your monthly earnings, payments, and financial growth rates with extreme accuracy and absolute transparency.' },
            { title: 'Organization that Doubles Your Productivity', desc: 'Track "this month\'s performance" and attendance rates, helping you improve your clinic\'s efficiency and reduce waiting times.' }
          ]
        },
        patientCta: 'Download the App and Start Your Treatment Journey',
        doctorCta: 'Join Our Network and Grow Your Digital Clinic'
      },
      error: {
        title: 'Sorry, an unexpected error occurred',
        desc: 'We are currently having difficulty loading this part. Please try again or refresh the page.',
        reload: 'Reload Page'
      }
    }
  },
  ar: {
    translation: {
      header: {
        brandAr: 'أمان إيفر والرعاية الشاملة للخدمات الطبية',
        brandEn: 'AMAN EVER COMPANY & COMPREHENSIVE Care of Medical Services',
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        features: 'مميزاتنا',
        myBookings: 'حجوزاتي وإستشاراتي الطبية',
        merchantPlatform: 'منصة دخول التاجر',
        amanDoctor: 'منصة دخول الأطباء',
        blog: 'مدونة أمان',
        contact: 'تواصل معنا',
        login: 'تسجيل دخول',
        subscribe: 'اشترك الآن'
      },
      hero: {
        badge: 'أمان إيفر والرعاية الشاملة',
        slogan: 'احتياجك في تطبيق وعالمك في بطاقة',
        slides: [
          {
            title: 'أمان إيفر والرعاية الشاملة للخدمات الطبية',
            description: 'كل احتياجاتك الطبية والصحية والتجميلية في منصة واحدة.. وفر وقتك، واضمن جودتك.',
            message: 'وساطة طبية احترافية وحلول صحية ذكية.',
            cta: 'حمل التطبيق الآن وابدأ رحلتك الصحية'
          },
          {
            title: 'احتياجك في تطبيق، وعالمك في بطاقة',
            description: 'اختبر مستقبل الرعاية الصحية مع منصتنا الرقمية المتكاملة وبطاقتنا الإلكترونية الذكية.',
            message: 'حلول صحية رقمية مبتكرة ترتقي بجودة الحياة.',
            cta: 'انضم إلى أمان إيفر الآن'
          },
          {
            title: 'نخبة من الأطباء ورعاية مباشرة 24/7',
            description: 'تقديم الخدمات الرقمية والرعاية المباشرة لنخبة من الأطباء على مدار الساعة لسلامتكم.',
            message: 'الجسر التقني بينك وبين أفضل مقدمي الخدمات في المملكة.',
            cta: 'ابدأ استشارتك الآن'
          },
          {
            title: 'عضوية أمان إيفر (بطاقة بريمير – بطاقة VIP)',
            description: 'بوابتك للحصول على خصومات مباشرة تصل إلى 80% على كافة الخدمات الطبية والتجميلية. صحتك أغلى معنا.',
            message: 'شمولية وسرعة في بطاقة واحدة.',
            cta: 'احصل على بطاقتك الآن'
          },
          {
            title: 'برنامج الولاء (الكاش باك)',
            description: 'احصل على استرداد نقدي عند شراء البطاقة أو مع أول استخدام للخدمات. استمتع بعوائد مالية فورية لمحفظتك.',
            message: 'توفير يبدأ من أول زيارة.',
            cta: 'اكتشف مزايا الكاش باك'
          },
          {
            title: 'محفظة نقاط أمان',
            description: 'حوّل فواتيرك الطبية إلى نقاط واستبدلها برصيد خدمات وهدايا حصرية.',
            message: 'كل نقطة تساوي عالماً من المكافآت.',
            cta: 'انظم لعالم النقاط'
          },
          {
            title: 'متجر أمان الإلكتروني',
            description: 'منتجات طبية وتجميلية عالية الجودة بأسعار تنافسية وعروض حصرية.',
            message: 'تسوق بذكاء وادفع بكل أمان.',
            cta: 'تسوق الآن'
          },
          {
            title: 'خدمات الرعاية المنزلية: رعاية طبية متكاملة في قلب منزلك',
            description: 'لأن راحتكم هي أولويتنا، نأتيكم بفريق طبي متكامل لتقديم أجود الخدمات الصحية حيثما كنتم. نحن نجمع بين الدقة الاحترافية والسرعة في الاستجابة، لضمان أمان تام لك ولعائلتك.',
            message: '• خدمات تمريضية متخصصة\n• رعاية كبار السن\n• فحوصات مخبرية منزلية\n• علاج طبيعي وتأهيل\n• حجامة بمعايير طبية آمنة',
            cta: 'اكتشف خدماتنا المنزلية'
          },
          {
            title: 'خدمة طلب الأطباء للمنزل (Home Visit Doctors)',
            description: 'نوفر لك نخبة من الأطباء في مختلف التخصصات لزيارتك في المنزل، مما يجنبك عناء الانتظار في المستشفيات.',
            message: '1. كشف طبي شامل\n2. متابعة ما بعد العمليات\n3. وصف الخطط العلاجية\n4. تقييم الحالة الصحية العامة\nبكل دقة، سرعة، وأمان.',
            cta: 'اطلب طبيب للمنزل الآن'
          },
          {
            title: 'بطاقة أمان إيفر بريمير (Aman Ever Premier)',
            description: 'مفتاحك للحصول على رعاية طبية وصحية وتجميلية متكاملة بأقل التكاليف.',
            message: 'توفير لك ولعائلتك.. تغطية واسعة وشاملة لجميع الاحتياجات الطبية بخصومات حقيقية وفورية.',
            cta: 'اطلب بطاقة بريمير الآن'
          },
          {
            title: 'بطاقة أمان إيفر في آي بي (Aman Ever VIP)',
            description: 'الفئة النخبوية والأقوى في عالم الرعاية الصحية والرفاهية الطبية.',
            message: 'خصومات هائلة ومزايا مجانية وتجربة علاجية فريدة لمن يبحث عن أقصى درجات التوفير والرفاهية.',
            cta: 'اطلب بطاقة VIP الآن'
          }
        ],
        discoverNetwork: 'اكتشف الشبكة'
      },
      floating: {
        urgentConsultation: 'إستشارة عاجلة',
        membershipRequest: 'طلب عضوية'
      },
      actions: {
        booking: {
          title: 'حجز موعد طبي',
          desc: 'احجز موعدك مع الطبيب بسهولة'
        },
        card: {
          title: 'البطاقة الإلكترونية',
          desc: 'بطاقتك الصحية دائماً معك'
        },
        homeCare: {
          title: 'خدمات الرعاية المنزلية',
          desc: 'خدماتنا الطبية تصلك للمنزل'
        }
      },
      features: {
        subtitle: 'لماذا نحن الأفضل؟',
        title: 'المميزات التنافسية',
        items: [
          { title: 'شمولية تامة بلا قيود', desc: 'خدماتنا وبطاقاتنا متاحة لجميع فئات المجتمع (مواطنين، مقيمين، وزوار)، ولكافة الأعمار والحالات الصحية دون أي قيود أو استثناءات.' },
          { title: 'تغطية واسعة وميسرة', desc: 'نقدم لك تغطية جغرافية شاملة بلا حدود ائتمانية، والأهم من ذلك: لا تتطلب خدماتنا أي موافقات مسبقة من الشركة.' },
          { title: 'سهولة وسرعة فائقة', desc: 'إصدار فوري للبطاقة الإلكترونية في ثوانٍ معدودة عبر التطبيق، مع فريق خدمة عملاء متاح لخدمتك على مدار الساعة.' },
          { title: 'استجابة طبية سريعة (سؤالك الأول مجاناً)', desc: 'نضمن لك في خدمة "اسأل طبيب" سرعة استجابة فائقة وردوداً خلال 15 دقيقة كحد أقصى، ولأن صحتك تهمنا، جعلنا سؤالك واستشارتك الأولى مجانية بالكامل.' },
          { title: 'حجوزات طبية واستشارات فورية', desc: 'احجز موعدك الطبي واحصل على استشارة فورية مع نخبة من الأطباء في ثوانٍ معدودة عبر التطبيق.' },
          { title: 'خدمات الرعاية المنزلية', desc: 'خدمات تمريضية متخصصة، رعاية كبار السن، فحوصات مخبرية منزلية، علاج طبيعي، وحجامة؛ نأتيك بفريق طبي متكامل إلى منزلك.' },
          { title: 'مزايا مالية وعالم من التوفير', desc: 'نمنحك خصومات مباشرة تصل إلى 80% ، بالإضافة إلى استرداد نقدي (كاش باك) ومحفظة نقاط متكاملة ضمن برنامج الولاء.' },
          { title: 'خيارات دفع مرنة وميسرة', desc: 'نمنحك كافة وسائل الدفع الإلكتروني، بالإضافة إلى توفير خدمات الدفع بالتقسيط المريح عبر (تابي وتمارا) لتسهيل حصولك على الرعاية.' },
          { title: 'الشفافية والموثوقية', desc: 'نؤمن بالشفافية المطلقة، حيث يتيح لك التطبيق الاطلاع على التقييمات الحقيقية للخدمات والمنشآت الطبية من قبل العملاء لتتخذ قرارك وأنت مطمئن.' }
        ],
        cta: 'استمتع بكل هذه المميزات الآن.. حمل تطبيق أمان إيفر',
        servicesTitle: 'باقة خدماتنا',
        servicesSubtitle: 'حلول صحية مبتكرة صممت لضمان راحتك وسلامتك',
        searchPlaceholder: 'ابحث عن الخدمة المطلوبة...',
        noResults: 'لا توجد خدمات تطابق بحثك',
        showAll: 'عرض جميع الخدمات',
        services: [
          { name: 'عضوية أمان إيفر (بطاقتي Premier و VIP)', desc: 'بوابتك للحصول على خصومات مباشرة تصل إلى 80% على كافة الخدمات الطبية والتجميلية. يمكنك إصدار بطاقتك الإلكترونية فوراً عبر التطبيق في ثوانٍ معدودة.' },
          { name: 'برنامج الولاء (الكاش باك)', desc: 'احصل على استرداد نقدي عند شراء البطاقة أو مع أول استخدام للخدمات. استمتع بعوائد مالية فورية لمحفظتك.' },
          { name: 'محفظة نقاط أمان', desc: 'إجمع نقاطك مع كل فاتورة شرائية وقم بإستبدالها برصيد خدمات لمشترياتك القادمة' },
          { name: 'حجوزات واستشارات فورية', desc: 'حجز مواعيدك مع نخبة من الأطباء دون انتظار. استشارات أونلاين عبر الاتصال الصوتي والمرئي، أو عبر خدمة "اسأل طبيب" (شات) مع ضمان سرعة الاستجابة.' },
          { name: 'خدمات الرعاية المنزلية', desc: 'نوفر لك نخبة من الأطباء في مختلف التخصصات وخدمات تمريضية متخصصة لزيارتك في المنزل مما يجنبك عناء الإنتظار في المستشفيات\nرعاية كبار السن +فحوصات مخبرية منزلية +علاج طبيعي وحجامة تاتيك بفريق متكامل إلى منزلك' },
          { name: 'متجر أمان الإلكتروني', desc: 'متجر متنوع يجمع لك المنتجات والخدمات الطبية والتجميلية بأسعار مخفضة وعروض حصرية لا تتوقف.' },
          { name: 'الشبكة الطبية الواسعة', desc: 'وصول مباشر لشبكة واسعة وموثوقة من المستشفيات والمراكز المتخصصة والصيدليات في كافة أنحاء المملكة.' },
          { name: 'الشبكة الصحية والرياضية', desc: 'شبكة متكاملة تشمل نوادي اللياقة والأندية الرياضية والنوادي الصحية لنمط حياة أكثر حيوية.' }
        ],
        modals: {
          membership: {
            title: 'عضوية أمان إيفر (Premier & VIP)',
            content: 'عن الشمولية: "أمان إيفر.. لأن صحتك لا تتجزأ، جمعنا لك كل الخدمات الطبية، التجميلية، والوقائية في بطاقة واحدة."\n\nعن السرعة: "بضغطة زر.. نختصر لك المسافات. مواعيدك محجوزة، واستشاراتك جاهزة، ورعايتنا تصلك حيثما كنت."\n\nعن الثقة: "من الفحوصات الروتينية إلى العمليات الكبرى؛ أمان إيفر شريكك الوفي في كل مراحل رحلتك الصحية."\n\nالرعاية الطبية والجراحية والعمليات الجراحية: تغطية كاملة للعمليات (الكبرى، المتوسطة، والصغرى) بأعلى معايير الدقة.\n\nالأمومة والطفولة: رعاية متكاملة تشمل عمليات الولادة (الطبيعية والقيصرية) ومتابعة الحمل.\n\nالأمراض المزمنة: تشمل خدمات غسيل الكلى ومتابعة الحالات الحرجة.\n\nالفحوصات الشاملة: كشوفات طبية في كافة التخصصات، وخدمات المختبرات والأشعة.\n\n[ عالم التجميل والعناية ]: طب الأسنان: من الكشوفات الدورية إلى تجميل وابتسامة هوليود. الليزر والتجميل: أحدث تقنيات الليزر والعناية بالبشرة والعمليات التجميلية المتخصصة.\n\n[ الخدمات الرقمية والمنزلية ]: استشارات بضغطة زر: احجز موعدك أو احصل على استشارتك الطبية أونلاين في ثوانٍ. الرعاية المنزلية: طاقم طبي متكامل يصل إلى باب بيتك بدقة وأمان.\n\nسهولة وسرعة فائقة: إصدار فوري للبطاقة الإلكترونية في ثوانٍ معدودة عبر التطبيق، مع فريق خدمة عملاء متاح لخدمتك على مدار الساعة.\n\nالطوارئ والعناية العاجلة: استجابة فورية للحالات التي لا تحتمل الانتظار.\n\nلماذا يختار الآلاف بطاقة أمان إيفر؟ لأنها العضوية الوحيدة التي تمنحك: شمولية مطلقة: تغطي كل شيء، من جلسة الليزر إلى عمليات القلب وغسيل الكلى. حلولاً ذكية: نظام حجز واستشارات أونلاين يغنيك عن عناء الانتظار. رعاية منزلية: خدمات طبية احترافية في خصوصية منزلك. دعم الطوارئ: رعاية عاجلة متوفرة في أي وقت ومن أي مكان.',
            buttons: ['بطـاقـة أمـان إيـفـر: رعايةٌ تُكافئك! اشترِ البطاقة: واحصل على العضوية']
          },
          cashback: {
            title: 'صحة أوفر.. من أول زيارة',
            content: 'مع برنامج الولاء من أمان إيفر، مدفوعاتك الطبية تعود إليك! عند شراء البطاقة، نمنحك ميزة الكاش باك لاستخدامها في أول عملية شرائية لدى شركائنا الطبيين. ابدأ رحلتك الصحية بذكاء وتوفير.',
            mechanism: ['استفد من الكاش باك: خصم نقدي مباشر عند أول استخدام في المنشآت الطبية.', 'وفّر أكثر: ابدأ تجربة استثنائية من اللحظة الأولى.']
          },
          points: {
            title: 'محفظة النقاط الذكية',
            content: 'إنضم إلى عالم المكآفات مع برنامج الولاء محفظة النقاط الذكية كل عملية شرائية تقوم بها تتحول إلى نقاط في رصيدك لتمنحك رصيد خدمات وهدايا حصرية في مشترياتك القادمة',
            mechanism: [
              'إشتر /أطلب خدماتك أومنتجاتك',
              'إجمع / تضاف النقاط فورا إلى محفظتك',
              'وفر/إستخدمها كخصم رصيد خدمات وهدايا حصرية لمشترياتك القادمة.'
            ]
          },
          bookings: {
            title: 'حجوزات واستشارات فورية',
            content: 'رعاية عابرة للحدود؛ نلغي المسافات لنضع أفضل الكفاءات الطبية في خدمتك.\n\nاستشارات آمنة، مشفرة، ومعتمدة.. لأن خصوصيتك هي أولويتنا القصوى.\n\nمنظومة ذكية تجمع بين دقة التشخيص وسهولة الوصول، لنمط حياة أكثر صحة.\n\nنبضك يهمنا: استشارة طبية فورية للحالات الطارئة على مدار الساعة.\n\nوداعاً لغرف الانتظار: تحدث مع طبيبك المختص الآن دون مواعيد مسبقة.\n\nالأمان الصحي بين يديك: استجابة سريعة، تشخيص دقيق، وخصوصية تامة.\n\nرعايتكم لا تنتظر.. استشارات طبية فورية وحجوزات مؤكدة بنقرة واحدة.\n\nطبيبك معك.. أينما كنت وفي أي وقت. رعاية صحية متكاملة عبر شاشتك.\n\nلأن الصحة لا تقبل التأجيل؛ نصلك بنخبة الأطباء في أي زمان ومن أي مكان.',
            buttons: ['استشر طبيبك الآن', 'احجز موعدك بضغطة زر', 'ابدأ رحلة الرعاية']
          },
          homeCare: {
            title: 'خدمات الرعاية المنزلية',
            content: 'كل احتياجاتكم الصحية تصلكم حيثما كنتم. خدمات الرعاية منزلية متكاملة، تُنفذ بدقة احترافية، سرعة في الاستجابة، وأمان تام لك ولعائلتك.'
          },
          store: {
            title: 'متجر أمان إيفر الإلكتروني',
            content: 'متجر أمان إيفر.. عالمٌ من الخيارات، جودة نراهن عليها، وأسعارٌ تنافس التوقعات.\n\nكل ما تحتاجه في مكان واحد؛ متجر أمان إيفر يجمع لك التنوع، الجودة، وسهولة الوصول.\n\nأمان إيفر: متجرك الشامل لخدمات ومنتجات صُممت لترتقي بنمط حياتك بأفضل قيمة.\n\nتسوق بلمسة، وادفع بكل سلاسة: وفرنا لك أحدث وأسهل طرق الدفع الآمنة، لتستمتع برحلة تسوق خالية من العناء.\n\nمن الاختيار حتى الوصول.. سهولة لا تنتهي: واجهة بسيطة، دفع سريع، وخدمة عملاء تضعك دائماً في المقدمة.\n\nأمان إيفر.. تسوق بذكاء، ادفع بأمان: تجربة رقمية متكاملة تمنحك الثقة في كل خطوة.'
          },
          'medical-network': {
            title: 'الشبكة الطبية الواسعة',
            content: 'وصول مباشر لشبكة واسعة وموثوقة من المستشفيات والمراكز المتخصصة والصيدليات في كافة أنحاء المملكة. نوفر لك أفضل الكفاءات الطبية مع خصومات تصل إلى 80%.'
          },
          'health-network': {
            title: 'الشبكة الصحية والرياضية',
            content: 'شبكة متكاملة تشمل نوادي اللياقة والأندية الرياضية والنوادي الصحية لنمط حياة أكثر حيوية. عروض حصرية وخصومات مميزة لأعضاء أمان إيفر.'
          },
          cta: 'ابدأ التجربة الآن.. حمل التطبيق'
        }
      },
      about: {
        subtitle: 'من نحن؟',
        title: 'شريككم الذكي في رحلة الرعاية الطبية',
        desc: 'نحن شركة أمان إيفر والرعاية الشاملة للخدمات الطبية، منصة تقنية سعودية رائدة متخصصة في الوساطة التقنية والتسويقية. ندير منظومة رقمية متكاملة وتطبيقات ذكية صُممت خصيصاً لمواكبة التحول الرقمي الصحي وفق رؤية المملكة 2030. نعمل بشغف لنكون الجسر التقني الذي يربطكم بنخبة من مقدمي الخدمات الطبية، الصحية، والتجميلية في المملكة، مقدمين حلول رعاية شاملة ومبتكرة تعيد تعريف مفهوم الخدمات الصحية الرقمية عبر دمج الابتكار بأعلى معايير الجودة.',
        visionSection: {
          subtitle: 'رؤيتنا وخدماتنا',
          desc: 'أن نكون المنصة الرائدة في التسويق الطبي والرعاية الصحية الرقمية في المملكة العربية السعودية والمنطقة العربية، والمساهمة الفاعلة في تحقيق مستهدفات رؤية السعودية 2030 في التحول الصحي والتقني. كما نسعى في أمان إيفر إلى إحداث نقلة نوعية في القطاع الصحي داخل المملكة العربية السعودية، من خلال استغلال أحدث التقنيات لتحويل تجربة الرعاية الصحية إلى نظام رقمي شامل وسلس.',
          services: [
            'الرعاية الطبية عن بُعد: تقديم الاستشارات الطبية وجدولة المواعيد بكل سهولة.',
            'الخدمات المنزلية: توفير خدمات الرعاية الصحية في مقر إقامة المستفيد.',
            'المتجر الإلكتروني: منصة مدمجة لشراء المنتجات والخدمات الطبية بأسعار مخفضة.',
            'الحلول المالية الذكية: تقديم عروض وخصومات ثابتة، مع تفعيل برنامج "الكاش باك" ومحفظة النقاط لتعزيز القيمة المضافة للمستخدم ضمن إطار تنظيمي معتمد.',
            'الربط التقني مع مقدمي الخدمات الطبية والجهات الداعمة لضمان سلاسة الخدمة.',
            'دعم المنشآت الطبية في الوصول الرقمي وتحسين تجربة المستفيد.'
          ]
        },
        mission: {
          title: 'رسالتنا',
          desc: 'نسعى لأن نكون جسراً آمناً يربط المجتمع بالخدمات الطبية والتجميلية، من خلال تسهيل الوصول السهل والموثوق بأعلى معايير الجودة والتقنية. نلتزم بالارتقاء بتجربة المريض عبر دمج التكنولوجيا بالرعاية المباشرة، وتوفير مزايا مالية حصرية تمنح عملاءنا (قوة التوفير والتميز) في كل وقت.'
        },
        identitySection: {
          subtitle: 'هويتنا وقيمنا',
          desc: 'نحن الرواد في دمج التقنية بالرعاية الطبية لتسهيل وصولك لأفضل الخدمات مدفوعين بمجموعة من القيم التي تشكل جوهر عملنا حيث:',
          values: [
            'نضع صحة الإنسان أولا وراحته في قلب كل ما نقدمه.',
            'الوضوح والاحترام: نتعامل مع الجميع بشفافية واحترام، لأن الثقة هي أساس كل علاقة ناجحة.',
            'الابتكار المبسّط: نسعى دوماً لتقديم خدمات طبية مبتكرة تجعل الرعاية أقرب وأسهل للجميع.',
            'التجربة الآمنة: نلتزم بتقديم تجربة طبية يمكنك الاعتماد عليها بأمان وطمأنينة.',
            'الشراكة في الخدمة: نؤمن أن العمل معاً وبناء شراكات قوية هو الطريق لتحقيق أفضل خدمة ممكنة.'
          ]
        }
      },
      network: {
        title: 'شبكة أمان الواسعة',
        medicalTab: 'الشبكة الطبية',
        healthTab: 'الشبكة الصحية',
        medical: [
          { title: 'مستشفيات كبرى', desc: 'شراكات استراتيجية مع أرقى وأكبر المستشفيات في المملكة' },
          { title: 'مجمعات وعيادات تخصصية', desc: 'مراكز طبية متكاملة في كافة أحياء ومدن المملكة' },
          { title: 'الاسنان والجلدية والتجميل', desc: 'رعاية متكاملة لصحة الأسنان والجلدية وأحدث الخدمات التجميلية' },
          { title: 'العيون والليزر', desc: 'أفضل مراكز تصحيح النظر والعناية بصحة العيون بأحدث تقنيات الليزر' },
          { title: 'العلاج الطبيعي', desc: 'برامج إعادة التأهيل والعلاج الطبيعي التخصصي تحت إشراف خبراء' },
          { title: 'المستلزمات الطبية', desc: 'تأمين كافة الأجهزة والمستلزمات الطبية المنزلية بجودة عالية' },
          { title: 'صيدليات معتمده', desc: 'شبكة واسعة من كبرى الصيدليات لتأمين كافة احتياجاتكم الدوائية' },
          { title: 'جميع الكشوفات والتحاليل والأشعه', desc: 'وصول مباشر لكافة أنواع الفحوصات المخبرية والأشعة التشخيصية' },
          { title: 'متابعه الحمل', desc: 'برامج متابعة الحمل ورعاية الأمومة والطفولة في أرقى المراكز' },
          { title: 'كافة العمليات الجراحية', desc: 'تغطية شاملة للعمليات الجراحية الكبرى والصغرى بأعلى المعايير' }
        ],
        health: [
          { title: 'التغذية الصحية والمكملات الغذائية', desc: 'استشارات غذائية ومكملات معتمدة لنمط حياة أكثر صحة' },
          { title: 'الأندية الرياضية', desc: 'خصومات حصرية على اشتراكات أرقى مراكز اللياقة والأندية الرياضية' },
          { title: 'البصريات', desc: 'أفضل مزودي النظارات والعدسات والخدمات البصرية المعتمدة' },
          { title: 'السبأ SPA والمساج', desc: 'خدمات الرفاهية والمساج العلاجي لتعزيز الصحة والنشاط' }
        ]
      },
      nearbyProviders: {
        title: 'مقدمي خدمات بالقرب منك',
        subtitle: 'اكتشف أفضل الخدمات الطبية والصحية والتجميلية القريبة من موقعك',
        categories: {
          all: 'الكل',
          hospitals: 'مستشفيات',
          clinics: 'عيادات',
          pharmacies: 'صيدليات',
          beauty: 'مراكز تجميل'
        },
        viewMap: 'عرض على الخريطة',
        bookNow: 'احجز الآن',
        distance: 'كم بعيد'
      },
      discounts: {
        title: 'أقوى الخصومات الحصرية',
        subtitle: 'عروض مميزة وحصرية لمشتركي أمان إيفر فقط',
        viewAll: 'مشاهدة الكل',
        discount: 'خصم'
      },
      nearby: {
        liveCenter: 'مركز المتابعة الحية',
        title: 'أمان لايف',
        subtitle: 'تغطية ذكية فورية',
        unitDistribution: 'توزيع الوحدات',
        activeProviders: 'مزود طبي نشط حالياً',
        logsTitle: 'سجل العمليات المباشر',
        searchPlaceholder: 'بحث عن وحدة (إسعاف، مستشفى، طبيب)...',
        trackingUnits: 'Tracking {{count}} Units',
        activeDetection: 'نظام الكشف النشط',
        scanningProtocol: 'بروتوكول تحديد الموقع',
        scanningLabels: ['جاري التهيئة...', 'مسح الشبكة...', 'مزامنة البيانات...', 'جاهز'],
        legend: {
          center: 'مركز طبي',
          ambulance: 'إسعاف متحرك',
          doctor: 'طبيب استشاري'
        },
        startScan: 'بدء المسح الشامل',
        noResults: 'لا توجد نتائج',
        noResultsDesc: 'حاول البحث عن وحدة أخرى',
        detectionSystem: 'نظام الكشف',
        protocolTitle: 'بروتوكول المسح',
        fieldLogs: 'سجلات الميدان',
        distribution: 'توزيع الأصول',
        geoNotSupported: 'الموقع الجغرافي غير مدعوم في متصفحك',
        geoSuccess: 'تم تحديد الموقع بنجاح',
        geoError: 'تعذر تحديد موقعك',
        scanSteps: ['جاري التهيئة...', 'مسح الشبكة...', 'مزامنة البيانات...'],
        logs: ['تم استلام مكالمة طوارئ', 'تم إرسال سيارة إسعاف', 'وصل المريض للمستشفى'],
        randomLogs: ['وحدة AE-04 تتحرك شمالاً', 'حالة MC-JED-01: نشط', 'AE-12-RESCUE في وضع الاستعداد', 'بدء استشارة AE-PRO-DR', 'فحص صيانة MC-NORTH']
      },
      blog: {
        title: 'مدونة أمان',
        subtitle: 'أحدث الأخبار والنصائح الصحية الموثوقة',
        readMore: 'اقرأ المزيد',
        source: 'المصدر:',
        posts: [
          {
            id: 1,
            title: 'أهمية الفحوصات الدورية في الكشف المبكر عن الأمراض',
            summary: 'تعتبر الفحوصات الطبية الدورية حجر الزاوية في الحفاظ على الصحة العامة، حيث تساعد في اكتشاف المشكلات الصحية في مراحلها الأولى قبل تفاقمها.',
            category: 'صحة عامة',
            date: '2024-04-10',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
            sourceName: 'منظمة الصحة العالمية (WHO)',
            sourceUrl: 'https://www.who.int'
          },
          {
            id: 2,
            title: 'التحول الرقمي الصحي في رؤية المملكة 2030',
            summary: 'كيف تساهم التقنيات الحديثة والمنصات الرقمية مثل "أمان إيفر" في تحقيق أهداف التحول الصحي وتسهيل وصول المواطنين للرعاية الطبية.',
            category: 'تقنية صحية',
            date: '2024-04-12',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
            sourceName: 'وزارة الصحة السعودية',
            sourceUrl: 'https://www.moh.gov.sa'
          },
          {
            id: 3,
            title: '5 نصائح ذهبية للحفاظ على صحة القلب والشرايين',
            summary: 'تعرف على العادات الغذائية والرياضية التي يوصي بها الخبراء لتقوية عضلة القلب والوقاية من أمراض الأوعية الدموية.',
            category: 'وقاية',
            date: '2024-04-14',
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
            sourceName: 'جمعية القلب الأمريكية',
            sourceUrl: 'https://www.heart.org'
          }
        ]
      },
      faq: {
        title: 'الأسئلة المتكررة',
        subtitle: 'كل مايهمك معرفته عن تطبيق وخدمات أمان إيفر والبطاقات الذكية',
        moreQuestions: 'هل لديك المزيد من الاستفسارات؟',
        contactSupport: 'تواصل معنا عبر واتساب: 920018041',
        tabs: {
          general: 'الأسئلة المتكررة العامة',
          cardholders: 'الأسئلة المتكررة لحاملي بطاقات أمان إيفر'
        },
        cardDetails: {
          premier: {
            title: 'بطاقة أمان إيفر بريمير (Aman Ever Premier) 🛡️',
            intro: 'ما هي بطاقة أمان إيفر بريمير؟ هي مفتاحك للحصول على رعاية طبية وصحية وتجميلية متكاملة بأقل التكاليف. صُممت هذه البطاقة لتوفر لك ولعائلتك تغطية واسعة وشاملة لجميع الاحتياجات الطبية بخصومات حقيقية وفورية.',
            servicesTitle: 'الخدمات المشمولة:',
            servicesDesc: 'تمنحك البطاقة خصومات تصل إلى 50% على قائمة طويلة من الخدمات تشمل:',
            services: [
              'الخدمات الطبية: الكشوفات، التحاليل المخبرية، والأشعة.',
              'طب الأسنان: كافة معالجات وتجميل الأسنان.',
              'العمليات الجراحية: العمليات الكبرى، المتوسطة، والصغرى.',
              'الأمومة والطفل: حالات الولادة الطبيعية والقيصرية.',
              'عالم التجميل: جميع خدمات التجميل والليزر والعناية بالبشرة.',
              'وتشمل خصوماتها ايضا كل الخدمات والمنتجات الطبية والصحية والتجميلية بلا استثناء.'
            ],
            benefitsTitle: 'المميزات الحصرية لبطاقة أمان إيفر بريمير:',
            benefits: [
              'برنامج ولاء الكاش باك (Cash Back): بمجرد الاشتراك، تحصل على رصيد مالي في محفظتك يُستخدم كخصم مباشر في أول عملية شرائية لك.',
              'محفظة نقاط أمان: في كل مرة تستخدم فيها البطاقة، تجمع نقاطاً يمكنك استبدالها برصيد خدمات مجاني لدى نفس المنشأة.',
              'خدمات التطبيق الذكية: إمكانية حجز المواعيد، استشارة طبيب عبر الفيديو، وطلب خدمات الرعاية المنزلية بأسعار مخفضة.',
              'المتجر الإلكتروني: تسوق المنتجات الطبية والصحية والتجميلية بأسعار حصرية عبر تطبيقنا.',
              'مرونة مطلقة: لا قيود على العمر أو الحالة الصحية، ولا حاجة لانتظار موافقات مسبقة.',
              'متاحة للجميع: تشمل المواطنين، المقيمين، والزوار (بموجب وثائق إثبات نظامية).'
            ]
          },
          vip: {
            title: 'بطاقة أمان إيفر في آي بي (Aman Ever VIP) 🌟',
            intro: 'ما هي بطاقة أمان إيفر في آي بي؟ هي الفئة النخبوية والأقوى في عالم الرعاية الصحية، صُممت لمن يبحث عن أقصى درجات التوفير والرفاهية الطبية. تمنحك هذه البطاقة خصومات هائلة ومزايا مجانية تجعل من رحلتك العلاجية تجربة فريدة.',
            servicesTitle: 'الخدمات المشمولة:',
            servicesDesc: 'تغطية شاملة وفائقة بخصومات تصل إلى 80% على:',
            services: [
              'جميع الخدمات الطبية والصحية والتشخيصية.',
              'كافة الإجراءات التجميلية والجراحية والليزر.',
              'خدمات الأسنان والأمومة والعمليات بمختلف أنواعها.'
            ],
            benefitsTitle: 'المميزات الحصرية والخدمات المجانية:',
            benefits: [
              'هدايا VIP المجانية: استمتع بـ 5 حجوزات طبية مجانية مع الأطباء، بالإضافة إلى خدمة "اسأل طبيب" لـ 5 استشارات مجانية.',
              'أقوى كاش باك: رصيد مالي ترحيبي يُستخدم لمرة واحدة عند أول عملية شرائية ليعطيك دفعة توفير قوية من البداية.',
              'محفظة النقاط الذهبية: تمنحك هذه الفئة نقاطاً أكثر ضعفيّ الفئات الأخرى عند كل عملية، لتستبدلها سريعاً بخدمات مجانية.',
              'الرعاية الرقمية والمنزلية: حجز مواعيد، استشارات فيديو، وخدمات الرعاية المنزلية بأسعار مخفضة جداً، مع إمكانية الطلب من المتجر الإلكتروني بأسعار VIP.',
              'موافقة فورية ومسبقة: لا تحتاج للانتظار! موافقتك جاهزة مسبقاً من الشركة بمجرد حملك للبطاقة.',
              'شاملة وغير مقيدة: متاحة لجميع الفئات (مواطن، مقيم، زائر) دون النظر للعمر أو الحالة الصحية.'
            ]
          }
        },
        sections: {
          general: [
            {
              q: 'هل يجب أن أمتلك بطاقة أمان إيفر لكي أستخدم التطبيق؟',
              a: 'أبداً! تطبيق أمان إيفر هو منصة صحية مفتوحة للجميع. يمكنك تحميل التطبيق والاستفادة من كافة خدماته الرقمية مثل حجز المواعيد، استشارات الفيديو مع الأطباء، طلب الرعاية المنزلية، والتسوق من المتجر الإلكتروني الطبي، حتى بدون امتلاك بطاقة عضوية.'
            },
            {
              q: 'ما الفرق بين استخدام التطبيق ببطاقة عضوية أمان إيفر أو بدونها؟',
              a: 'التطبيق يوفر لك الوصول والراحة، أما البطاقة فهي توفر لك المال. بدون البطاقة، ستحصل على الخدمات والمنتجات بأسعارها العادية. أما عند امتلاكك لبطاقة (بريمير أو VIP)، فإنك تفتح بوابة من الخصومات الكبرى التي تصل إلى 80%، بالإضافة إلى استعادة النقود (Cash Back) ونظام النقاط والمزايا المجانية.'
            },
            {
              q: 'هل يمكنني الشراء من المتجر الإلكتروني إذا لم أكن مشتركاً في إحدى البطاقات؟',
              a: 'نعم، المتجر متاح لجميع مستخدمي التطبيق لتسوق أرقى المنتجات الطبية والتجميلية. ولكن، يحصل حاملوا بطاقات أمان إيفر على "أسعار خاصة وحصرية" وعروض كاش باك لا تظهر للمستخدم العادي، مما يجعل تجربة التسوق مع البطاقة أكثر ذكاءً وتوفيراً.'
            },
            {
              q: 'أنا زائر وأحتاج لخدمة الرعاية المنزلية، هل يمكنني الطلب عبر التطبيق؟',
              a: 'بكل تأكيد، خدماتنا الرقمية (رعاية منزلية، حجز موعد، استشارة فيديو) متاحة لكل مستخدمي التطبيق من مواطنين ومقيمين وزوار. والبطاقة هي خيار إضافي متاح لك إذا كنت ترغب في الحصول على هذه الخدمات بأسعار مخفضة جداً بدلاً من السعر الكامل.'
            },
            {
              q: 'لماذا يفضل الكثيرون ترقية حساباتهم واقتناء بطاقة أمان إيفر؟',
              a: 'لأن البطاقة تحول "مصاريفك الصحية" إلى "استثمار". فبينما يستمتع الجميع بسهولة الاستخدام عبر التطبيق، ينفرد حاملو البطاقات باسترداد مالي (Cash Back) ونقاط ولاء تتحول لخدمات مجانية، فضلاً عن الخصومات المباشرة التي تجعل تكلفة الرعاية الصحية والتجميلية في متناول اليد دائماً.'
            }
          ],
          cardholders: [
            {
              title: 'أولاً: الاسئلة المتكررة لحاملي بطاقات أمان إيفر',
              items: [
                {
                  q: 'من هم الفئات الذين يمكنهم الاستفادة من بطاقات أمان إيفر؟',
                  a: 'بطاقاتنا مصممة للجميع؛ تشمل المواطن، المقيم، والزائر. كل ما تحتاجه هو وجود إثبات هوية أو وثائق نظامية سارية لتستمتع بكافة الخصومات والمزايا.'
                },
                {
                  q: 'هل هناك قيود تتعلق بالعمر أو الحالة الصحية قبل الاشتراك؟',
                  a: 'أبداً، بطاقات أمان إيفر تتميز بأنها غير مقيدة بعمر معين أو حالة صحية محددة. كما أنها لا تتطلب فحصاً طبياً قبل الاشتراك أو موافقات مسبقة من الشركة، فالموافقة تعتبر موجودة مسبقاً لكل حاملي البطاقة.'
                }
              ]
            },
            {
              title: 'ثانياً: أسئلة حول الخصومات والخدمات',
              items: [
                {
                  q: 'ما هو الفرق الجوهري بين بطاقة "بريمير" وبطاقة "VIP"؟',
                  a: 'الفرق يكمن في سقف التوفير والمزايا المجانية؛ بطاقة بريمير تمنحك خصومات تصل من 20% الى 50%، بينما تمنحك بطاقة VIP خصومات هائلة تصل من 30% إلى 80%، بالإضافة إلى خدمات مجانية تشمل 5 حجوزات طبية و5 استشارات "اسأل طبيب" مجانية تماماً في تطبيقنا الرقمي.'
                },
                {
                  q: 'هل تشمل البطاقة العمليات الجراحية الكبيرة والولادة؟',
                  a: 'نعم، تغطي البطاقات كافة المستويات الطبية بدءاً من الكشوفات والمختبرات، وصولاً إلى العمليات الجراحية (الكبرى، المتوسطة، والصغرى) وحالات الولادة الطبيعية والقيصرية بخصومات مباشرة.'
                },
                {
                  q: 'هل يمكنني استخدام البطاقة في مراكز التجميل والليزر؟',
                  a: 'بالتأكيد، خصومات أمان إيفر تشمل كافة الخدمات التجميلية، إجراءات الليزر، والعناية بالبشرة في المراكز المعتمدة لدينا.'
                }
              ]
            },
            {
              title: 'ثالثاً: أسئلة حول المميزات المالية وبرامج الولاء',
              items: [
                {
                  q: 'كيف أستفيد من ميزة "الكاش باك" (Cash Back) عند الاشتراك؟',
                  a: 'عند تفعيل عضويتك، تحصل على رصيد مالي ترحيبي في محفظتك الإلكترونية. يمكنك استخدام هذا الرصيد كخصم مالي عند قيامك بأول عملية شرائية لخدماتنا، مما يعني توفيراً فورياً من اللحظة الأولى.'
                },
                {
                  q: 'ما هو نظام "نقاط أمان" وكيف يتم استبداله؟',
                  a: 'هو نظام مكافآت يمنحك نقاطاً مقابل كل عملية شرائية تقوم بها. هذه النقاط تٌجمع في محفظتك داخل التطبيق، ويمكنك تحويلها إلى رصيد خدمات مالي لاستخدامه في الحصول على خدمات طبية أو صحية لدى نفس المنشأة.'
                }
              ]
            },
            {
              title: 'رابعاً: أسئلة حول الخدمات الرقمية والتطبيق',
              items: [
                {
                  q: 'ما هي الخدمات التي يوفرها تطبيق "أمان إيفر" لحاملي البطاقات؟',
                  a: 'يوفر التطبيق تجربة رعاية ذكية تشمل: حجز موعد مع طبيب، استشارة طبية "فيديو" عن بُعد، طلب خدمات الرعاية المنزلية والتسوق من المتجر الإلكتروني الطبي المتكامل. وكل هذا بأسعار مخفظة لحاملي بطاقات أمان إيفر.'
                },
                {
                  q: 'هل يمكنني شراء منتجات طبية عبر التطبيق؟ بالبطاقة',
                  a: 'نعم، يضم التطبيق متجراً إلكترونياً يحتوي على منتجات طبية، صحية، وتجميلية متنوعة، ويحصل حاملو البطاقات (خاصة VIP) على أسعار حصرية ومخفضة عند الطلب من خلاله.'
                }
              ]
            },
            {
              title: 'خامساً: أسئلة تقنية وتواصل',
              items: [
                {
                  q: 'كيف أحصل على الموافقة عند التوجه للمستشفى أو المركز الطبي؟',
                  a: 'مع أمان إيفر، لا داعي للانتظار! بطاقتك تحمل موافقة مسبقة وفورية، بمجرد إبراز البطاقة أو الهوية في المنشأة الصحية المشتركة، يتم تفعيل الخصم الخاص بك مباشرة دون أي تعقيدات إدارية.'
                }
              ]
            },
            {
              title: 'سادساً: باقات الشركات والمؤسسات (شركاء النجاح)',
              items: [
                {
                  q: 'هل توفر "أمان إيفر" عروضاً خاصة للشركات والمؤسسات؟',
                  a: 'نعم، نحن نؤمن بأن الموظف هو رأس المال الحقيقي، لذا قدمنا باقات مرنة تبدأ من 199 ريال للبطاقة الواحدة، مع خصومات تصاعدية مذهلة كلما زاد عدد الموظفين:\n• من 10 موظفين: تنخفض القيمة إلى 150 ريال للبطاقة.\n• من 20 موظفاً فأكثر: يحصل الموظف على البطاقة بسعر استثنائي وهو 99 ريال فقط.'
                },
                {
                  q: 'هل يمكن لموظفي الشركات الحصول على مميزات "VIP" بأسعار خاصة؟',
                  a: 'بالتأكيد، وفرنا باقة النخبة للموظفين بخصومات كبرى. بينما تبلغ قيمة بطاقة VIP للفرد 499 ريال، تحصل الشركات على أسعار تفضيلية:\n• لـ 10 موظفين: تنخفض إلى 300 ريال للفرد.\n• لـ 20 موظفاً فأكثر: يحصل الموظف على كافة مزايا VIP مقابل 250 ريال فقط.'
                }
              ]
            },
            {
              title: 'سابعاً: الباقات العائلية والمتميزة',
              items: [
                {
                  q: 'ما هي خيارات التوفير المتاحة للعائلات؟',
                  a: 'وفرنا لك باقة العائلة (بريمير) التي تغطي 4 أفراد بقيمة 999 ريال فقط. ولأننا نهتم بكل أفراد عائلتك، فإن أي فرد إضافي (فوق الـ 5 أفراد) يتم إضافته مقابل 99 ريال فقط للبطاقة.'
                },
                {
                  q: 'هل توجد باقات محددة لعدد أفراد أقل بمزايا إضافية؟',
                  a: 'نعم، أطلقنا باقات تناسب الجميع:\n• الباقة المتميزة: تشمل 3 أفراد بقيمة 599 ريال.\n• الباقة الذهبية: الخيار الأفضل للمجموعات من 4 إلى 6 أفراد بقيمة 999 ريال.'
                }
              ]
            },
            {
              title: 'ثامناً: المسؤولية المجتمعية والتقدير (باقات الرعاية الخاصة)',
              items: [
                {
                  q: 'كيف تدعم "أمان إيفر" كبار السن في رحلتهم الصحية؟',
                  a: 'تقديراً لآبائنا وأمهاتنا، خصصنا باقة كبار السن بسعر مخفض جداً وهو 199 ريال للفرد، لضمان حصولهم على أفضل رعاية صحية وتجميلية دون عبء مادي.'
                },
                {
                  q: 'ما هي التسهيلات المقدمة للأرامل والمطلقات؟',
                  a: 'لدعم استقرارهم الصحي، وفرنا باقة خاصة للأرامل والمطلقات تمنحهم كافة مزايا بطاقة أمان إيفر بقيمة رمزية وهي 99 ريال فقط للفرد.'
                },
                {
                  q: 'هل هناك باقات مجانية لفئات محددة؟',
                  a: 'نعم، من منطلق مسؤوليتنا الدينية والاجتماعية، نتشرف بتقديم بطاقة أمان إيفر مجاناً بالكامل (100%) لكل من:\n• حفاظ كتاب الله عز وجل.\n• الأيتام.'
                }
              ]
            },
            {
              title: 'تاسعاً: أنواع البطاقات والاشتراكات',
              items: [
                {
                  q: 'ما هي البطاقة التي أحصل عليها عند اشتراكي في إحدى باقات "أمان إيفر" المتنوعة؟',
                  a: 'عند اختيارك لأي من باقاتنا المخصصة (مثل باقة الشركات، العائلات، كبار السن، أو الباقات المجانية للأيتام وحفاظ القرآن)، يتم إصدار بطاقة أمان إيفر بريمير (Premier) لكل فرد مشمول في الباقة.'
                },
                {
                  q: 'لماذا "بريمير" هي الاختيار المعتمد لباقاتنا؟',
                  a: 'لأنها البطاقة الأكثر مرونة وانتشاراً، حيث تمنحك توازناً مثالياً بين السعر الموفر والخدمات الشاملة بخصومات تصل إلى 50%، بالإضافة إلى دخولك تلقائياً في برنامج الكاش باك ونظام نقاط أمان. نحن نعتمدها في باقاتنا لتكون الرعاية الصحية النوعية حقاً متاحاً للجميع بأفضل الأسعار.'
                },
                {
                  q: 'وماذا عن بطاقة أمان إيفر VIP؟',
                  a: 'تظل بطاقة VIP هي الفئة الحصرية المستقلة، وهي مصممة لمن يرغب في ترقية تجربته الصحية إلى أقصى حد ممكن بخصومات تصل إلى 80% ومزايا مجانية إضافية (مثل الكشوفات والاستشارات المجانية). يمكنك دائماً طلب ترقية اشتراكك إلى فئة VIP إذا كنت تبحث عن الرفاهية والتوفير الأعلى.'
                }
              ]
            },
            {
              title: 'عاشراً: برنامج الولاء (الكاش باك)',
              items: [
                {
                  q: 'ما هو برنامج الولاء (الكاش باك) من أمان إيفر وكيف أستفيد منه؟',
                  a: 'الإجابة: برنامج "الولاء هو نظام ذكي ومبتكر صمم خصيصا لضمان توفيرك المالي من اللحظة الاولى في إشتراكك بعضوية أمان إيفر وهو من ابتكارنا الخاص لنضمن لك أن تكون عضواً مستفيداً وموفراً من اللحظة الأولى. فبمجرد اشتراكك في إحدى بطاقات أو باقات "أمان إيفر"، نمنحك كاش باك رصيداً نقدياً (Cash Back) في محفظتك الإلكترونية داخل التطبيق كهدية ترحيبية.\n\nيمكنك استخدام هذا الرصيد كرصيد خدمات فقط لمرة واحدة عند أول عملية لك شرائية في أي من المجالات التالية:\n• الزيارات الميدانية: استخدامه كخصم مالي مباشر عند أول استخدام للبطاقة في المنشآت الطبية، الصحية، أو التجميلية المعتمدة لدينا.\n• الخدمات الرقمية: تطبيقه عند حجز موعد مع طبيب، أو طلب "استشارة فيديو"، أو الاستشارات الطبية العاجلة عبر التطبيق.\n• الرعاية المنزلية: استخدامه عند طلب باقات وخدمات الرعاية الصحية المنزلية.\n• التسوق الذكي: استخدامه كدفع نقدي عند طلب المنتجات والخدمات من المتجر الإلكتروني المتكامل داخل تطبيق "أمان إيفر".\nمع أمان إيفر، اشتراكك يعود إليك فوراً على شكل خدمات وتوفير!'
                }
              ]
            },
            {
              title: 'الحادي عشر: النطاق الجغرافي والصلاحية',
              items: [
                {
                  q: 'أين يمكنني استخدام بطاقة أمان إيفر؟ وهل تقتصر على مدينة محددة؟',
                  a: 'أمان إيفر صُممت لتكون معك أينما كنت! يمكنك استخدام البطاقة في شبكة واسعة ومتنامية من المستشفيات، المجمعات الطبية، مراكز التجميل، والمختبرات المعتمدة في مختلف المدن. كما أن خدماتنا الرقمية (استشارات الفيديو والمتجر) تخدمك في أي مكان وفي أي وقت عبر التطبيق، مما يجعل الرعاية الصحية في متناول يدك دائماً.'
                },
                {
                  q: 'ما هي مدة صلاحية بطاقة أمان إيفر؟ وكيف يمكنني تجديدها؟',
                  a: 'تمنحك بطاقة أمان إيفر (بريمير أو VIP) عاماً كاملاً (12 شهراً) من التوفير اللامحدود والرعاية المميزة من تاريخ إصدارها. وقبل انتهاء اشتراكك، سنقوم بتذكيرك عبر التطبيق لتجديد عضويتك بسهولة وبضغطة زر واحدة لضمان استمرار تمتعك بالخصومات والمزايا.'
                },
                {
                  q: 'إذا كنت أملك بطاقة فردية، هل يمكنني إضافة أفراد من عائلتي لاحقاً؟',
                  a: 'بكل تأكيد! نحن نؤمن بمرونة الخدمة. يمكنك دائماً ترقية اشتراكك من الفردي إلى إحدى باقاتنا العائلية أو الذهبية الموفرة عبر التطبيق، أو إضافة أفراد جدد برسوم مخفضة، لتستمتعوا جميعاً بخصومات أمان إيفر تحت مظلة اشتراك واحد.'
                },
                {
                  q: 'ماذا أفعل في حال فقدان البطاقة المطبوعة؟',
                  a: 'لا تقلق، مع تطبيق أمان إيفر، بطاقتك "رقمية" دائماً! حتى لو فقدت البطاقة البلاستيكية، يمكنك إبراز النسخة الرقمية من البطاقة الموجودة داخل التطبيق في أي منشأة طبية والحصول على خصمك فوراً. كما يمكنك طلب بدل فاقد للبطاقة المطبوعة عبر التواصل مع خدمة العملاء.'
                },
                {
                  q: 'هل هناك حد أقصى لعدد مرات استخدام البطاقة خلال العام؟',
                  a: 'لا يوجد حدود لطموحنا في رعايتك! يمكنك استخدام بطاقة أمان إيفر لعدد غير محدود من المرات طوال فترة صلاحية الاشتراك. سواء احتجت لزيارة الطبيب مرة واحدة أو عشرات المرات، فإن خصوماتك ثابتة ومستمرة في كل زيارة.'
                }
              ]
            },
            {
              title: 'الثاني عشر: التفعيل والخدمات الرقمية',
              items: [
                {
                  q: 'قمت بشراء البطاقة عبر الموقع، كيف أبدأ باستخدامها؟',
                  a: 'تفعيل بطاقة "أمان إيفر" عملية بسيطة وتتم خلال دقائق:\n1. تحميل التطبيق: قم بتحميل تطبيق أمان إيفر من متجر التطبيقات (iOS أو Android).\n2. تسجيل الدخول: استخدم رقم الجوال الذي استخدمته عند الشراء.\n3. تفعيل العضوية: ستجد بطاقتك الرقمية بانتظارك في ملفك الشخصي، ومن هنا يمكنك البدء بحجز المواعيد واستخدام رصيد "الكاش باك" الترحيبي فوراً.'
                },
                {
                  q: 'كيف تفيدني خدمة "استشارة فيديو" أو "الاستشارات العاجلة" في التطبيق؟',
                  a: 'هذه الخدمة مصممة لراحتك وسرعة استجابتك؛ حيث تتيح لك:\n• استشارة فيديو: التحدث مع طبيب مختص وجهاً لوجه وأنت في منزلك لشرح حالتك والحصول على التوجيه الطبي.\n• الاستشارات العاجلة: الرد السريع على استفساراتك الطبية الطارئة في أي وقت.\n• توفير الوقت: بدلاً من الانتظار في العيادات للحالات البسيطة، يمكنك الحصول على استشارتك بضغطة زر وبسعر مخفض جداً لحاملي البطاقات.'
                },
                {
                  q: 'ما هي خدمات "الرعاية المنزلية" وكيف أطلبها؟',
                  a: 'نحن نأتي بالرعاية الصحية إلى باب بيتك! تشمل هذه الخدمة (زيارة الطبيب و الممرض، سحب العينات، العلاج الطبيعي، وغيرها). يمكنك طلب هذه الباقات عبر التطبيق، وإذا كنت تحمل بطاقة أمان إيفر، فستحصل على هذه الخدمات الميدانية بأسعار حصرية وخاصة جداً.'
                },
                {
                  q: 'هل بياناتي الطبية وتاريخ استشاراتي في التطبيق آمنة؟',
                  a: 'خصوصيتك هي أولويتنا القصوى. تطبيق "أمان إيفر" يستخدم أعلى معايير التشفير والأمان لضمان سرية بياناتك الطبية، ولا يمكن لأي جهة الاطلاع على استشاراتك أو تاريخك المرضي إلا الأطباء المختصين الذين تختار التواصل معهم.'
                }
              ]
            },
            {
              title: 'الثالث عشر: الاستخدام الفوري والميداني',
              items: [
                {
                  q: 'هل يمكنني البدء باستخدام البطاقة فور الاشتراك داخل التطبيق فقط، أم يمكنني استخدامها في المنشآت مباشرة؟',
                  a: 'لك كامل الحرية في ذلك! بمجرد إتمام عملية الاشتراك، في باقات امان ايفر تتوفر بطاقتك "رقمياً" فوراً داخل التطبيق، وتصبح عضويتك فعاله فورا لاحاجة للانتظار ويمكنك البدء باستخدامها في الاتجاهين:\n1. الاستخدام الميداني المباشر: يمكنك التوجه فوراً لأي مستشفى أو مركز طبي أو صحي او تجميلي ضمن شبكتنا، وإبراز البطاقة الرقمية او البلاستيكية (مع هويتك او جواز السفر ) لموظف الاستقبال للحصول على الخصم المباشر والخدمات الميدانية.\n2. الاستخدام الرقمي داخل التطبيق: يمكنك في نفس اللحظة الاستفادة من كافة مزايا التطبيق مثل حجز المواعيد، استشارات الفيديو، طلب الرعاية المنزلية، أو التسوق من متجرنا الطبي بأسعارك الحصرية كعضو.'
                }
              ]
            },
            {
              title: 'الرابع عشر: لوحة التحكم وتفاصيل الحساب',
              items: [
                {
                  q: 'هل أجد تفاصيل اشتراكي، النقاط، الكاش باك، وفواتيري داخل حسابي فور تفعيل العضوية؟',
                  a: 'بكل تأكيد! تطبيق أمان إيفر مصمم ليكون "مساعدك الإداري والمالي الشخصي". بمجرد تأسيس حسابك وتفعيل اشتراكك في أي من باقاتنا، يتحول حسابك إلى لوحة تحكم ذكية وشاملة تجد فيها:\n• المحفظة الرقمية: ستجد فيها رصيد "الكاش باك" الترحيبي بانتظارك لاستخدامه في أول عملية، بالإضافة إلى رصيد "نقاط أمان" الذي ينمو مع كل استخدام.\n• سجل العمليات الشرائية: قائمة مفصلة بكل الخدمات التي حصلت عليها والمنتجات التي اشتريتها، لتكون على دراية تامة بكافة تحركاتك.\n• مركز الفواتير الرقمي: يمكنك الوصول إلى كافة فواتيرك وسندات السداد إلكترونياً في أي وقت، مما يغنيك عن الحاجة للاحتفاظ بالأوراق التقليدية ويضمن لك حقك وتوثيق مصروفاتك الصحية.\n• تفاصيل العضوية: ستجد نوع بطاقتك (بريمير أو VIP) وتاريخ انتهاء صلاحيتها لتتمكن من إدارتها بكل سهولة.'
                }
              ]
            }
          ]
        }
      },
      footer: {
        desc: 'شريككم الموثوق في الرعاية الصحية. نوفر لك ولعائلتك أفضل الخدمات الطبية بلمسة واحدة عبر تطبيقنا المبتكر.',
        cr: 'سجل تجاري: 7038166471',
        quickLinks: 'روابط تهمك',
        links: {
          about: 'عن أمان إيفر',
          services: 'خدماتنا الطبية',
          features: 'مميزاتنا',
          myBookings: 'حجوزاتي وإستشاراتي الطبية',
          network: 'الشبكة الطبية والصحية',
          doctorPlatform: 'منصة دخول الأطباء',
          merchantPlatform: 'منصة دخول التاجر',
          homeCare: 'خدمات الرعاية المنزلية',
          amanCards: 'عن بطاقات وباقات أمان إيفر',
          privacy: 'الخصوصية وسياسة البيانات'
        },
        contactUs: 'تواصل معنا',
        downloadApp: 'حمل التطبيق',
        address: 'جدة، البغدادية الشرقية – مبنى البغدادية بلازا',
        customerService: 'رقم خدمة العملاء',
        whatsapp: 'واتساب',
        landline: 'الهاتف الثابت',
        rights: '© {{year}} أمان إيفر والرعاية الشاملة للخدمات الطبية. جميع الحقوق محفوظة.',
        terms: 'الشروط والأحكام',
        dataPolicy: 'سياسة البيانات',
        privacy: 'سياسة الخصوصية',
        social: {
          facebook: 'تابعنا على فيسبوك',
          instagram: 'تابعنا على انستغرام',
          snapchat: 'أضفنا على سناب شات',
          tiktok: 'تابعنا على تيك توك',
          x: 'تابعنا على إكس',
          linkedin: 'تواصل معنا عبر لينكد إن',
          youtube: 'اشترك في قناتنا على يوتيوب'
        }
      },
      bookingsModal: {
        title: 'نافذتك الفورية لنخبة الأطباء',
        description: 'اختبر مستوى جديداً من الرعاية الصحية مع نظام الحجوزات في تطبيق أمان إيفر. لقد جعلنا التجربة أسرع وأكثر سلاسة من أي وقت مضى، لتركز على صحتك بدلاً من الانتظار. اكتشف سهولة الحجز الفعلي عبر تطبيقنا:',
        features: [
          { title: 'حجوزات فورية ومؤكدة', desc: 'احجز موعدك في ثوانٍ عبر الاتصال الصوتي أو المرئي مع نخبة من الاستشاريين.' },
          { title: 'أطباء متاحون 24/7', desc: 'احصل على رعاية طبية خبيرة في أي وقت ومن أي مكان. أطباؤنا دائماً في انتظارك.' },
          { title: 'خدمة "اسأل طبيب"', desc: 'احصل على ردود طبية سريعة وموثوقة عبر الدردشة الفورية في أقل من 15 دقيقة.' },
          { title: 'دعم التأمين الطبي', desc: 'ادمج تأمينك الطبي بسلاسة للحصول على حجوزات مباشرة ودون عناء.' },
          { title: 'تقييمات شفافة', desc: 'اختر طبيبك بكل ثقة بناءً على تقييمات حقيقية من مجتمع مرضانا.' },
          { title: 'إدارة مواعيدك بسهولة', desc: 'تتبع، عدل، أو ألغِ مواعيدك بضغطة زر واحدة عبر هاتفك.' }
        ],
        cta: 'لضمان أعلى مستويات أمان بياناتك وتقديم تجربة الحجز الأكثر سلاسة وكفاءة، فإن نظامنا متاح حصرياً عبر تطبيق أمان إيفر.',
        mainBtn: 'حمل التطبيق الآن لتجربة حجز سلسة ومتكاملة'
      },
      doctorPlatform: {
        title: 'منصة "منصة دخول الأطباء": التكنولوجيا التي تخدم المريض.. وتُمكّن الطبيب',
        intro: 'خلف كل استشارة ناجحة وحجز ميسر في "أمان إيفر"، تقف لوحة تحكم متطورة صُممت بعناية لتكون حلقة الوصل المثالية بين الطبيب ومريضه.',
        patientColumn: {
          title: 'للمرضى والعملاء 🩺',
          features: [
            { title: 'صحتك في أيدٍ منظمة', desc: 'بفضل نظام إدارة المواعيد الدقيق، نضمن لك عدم التأخير وتقديم الرعاية في وقتها المحدد.' },
            { title: 'ملفك الطبي آمن ومتاح', desc: 'يحتفظ النظام بسجلاتك ووصفاتك الطبية إلكترونياً، ليتمكن طبيبك من متابعة تاريخك الصحي بضغطة زر.' },
            { title: 'تواصل لا ينقطع', desc: 'نظام مراسلات مدمج يتيح لطبيبك البقاء على تواصل معك لمتابعة حالتك والرد على استفساراتك.' },
            { title: 'جودة تقاس بالأرقام', desc: 'نحن نراقب الأداء باستمرار؛ لوحة الطبيب تتابع "متوسط وقت الانتظار" و"معدل رضا المرضى" لضمان حصولك على تجربة استثنائية (بتقييم 4.8/5).' }
          ]
        },
        doctorColumn: {
          title: 'للأطباء ومقدمي الرعاية 💼',
          features: [
            { title: 'عيادتك الرقمية المتكاملة', desc: 'أدر مواعيدك، استعرض السجلات، وأصدر الوصفات الطبية بكل سهولة ومرونة من شاشة واحدة.' },
            { title: 'نمو مستمر لقاعدة مرضاك', desc: 'تابع إجمالي عدد مرضاك ونسبة النمو بسهولة، وابقَ على تواصل دائم معهم لتعزيز ولائهم.' },
            { title: 'لوحة تحكم مالية شفافة', desc: 'تتبع أرباحك الشهرية، مدفوعاتك، ونسب النمو المالي بدقة متناهية وبشفافية مطلقة.' },
            { title: 'تنظيم يضاعف إنتاجيتك', desc: 'تتبع "أداء هذا الشهر" ومعدلات الحضور، مما يساعدك على تحسين كفاءة عيادتك وتقليل أوقات الانتظار.' }
          ]
        },
        patientCta: 'حمل التطبيق وابدأ رحلة علاجك',
        doctorCta: 'انضم لشبكتنا ونمِّ عيادتك الرقمية'
      },
      error: {
        title: 'عذراً، حدث خطأ غير متوقع',
        desc: 'نواجه حالياً صعوبة في تحميل هذا الجزء. يرجى المحاولة مرة أخرى أو تحديث الصفحة.',
        reload: 'إعادة تحميل الصفحة'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
