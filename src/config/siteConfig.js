export const siteConfig = {
  brandName: "COLOURS",
  brandSubtitle: "EVENTS & ACTIVATIONS",
  logoUrl: "/assets/logo.png",
  heroTitle: "Celebrations & Activations Redefined.",
  heroTagline: "Surat's Premier Destination Wedding, Corporate Activation & Exhibition Powerhouse.",
  
  // Replace this video URL or local file path (/assets/your-video.mp4) with your own hero video reel
  heroVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-concert-crowd-cheering-in-front-of-the-stage-41474-large.mp4",
  heroVideoPoster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920",

  aboutStatement: "Pioneers in luxury weddings, high-impact brand activations, and grand exhibitions, turning visions into monumental celebrations.",
  
  stats: [
    { number: "680+", label: "Projects Completed", description: "From Instagram & verified showcases" },
    { number: "15+", label: "Years of Excellence", description: "Pioneering event architecture in Gujarat" },
    { number: "3,000+", label: "Community Followers", description: "Engaged clients & event enthusiasts" },
    { number: "100%", label: "Turnkey Execution", description: "Concept, decor, lighting & hospitality" }
  ],

  menuItems: [
    { label: "Home", href: "/" },
    { 
      label: "Work", 
      href: "/work",
      hoverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      subCategories: [
        { name: "Luxury Weddings", href: "/work?category=Wedding" },
        { name: "Brand Activations", href: "/work?category=Corporate" },
        { name: "Exhibitions", href: "/work?category=Exhibition" },
        { name: "Fashion & Special", href: "/work?category=Special" }
      ]
    },
    { 
      label: "Services", 
      href: "/services",
      hoverImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200"
    },
    { 
      label: "Clientele", 
      href: "/#clientele",
      hoverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200"
    },
    { 
      label: "Connect", 
      href: "/connect",
      hoverImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200"
    }
  ],

  projects: [
    {
      id: "arasa-annual-interior-exhibition",
      title: "ARASA Annual Interior & Design Exhibition",
      category: "Exhibition",
      location: "IIFD Campus, Surat",
      coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Turnkey exhibition management for IIFD ARASA, featuring custom booth fabrications, VIP inauguration ceremonies, design student displays, and lighting design.",
      highlights: ["Custom Booth Fabrication", "VIP Inauguration Stage", "5,000+ Visitors"]
    },
    {
      id: "utsav-vatika-royal-wedding",
      title: "Royal Destination Wedding at Utsav Vatika",
      category: "Wedding",
      location: "Utsav Vatika, Dumas Road, Surat",
      coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "A grand 3-day wedding spectacle featuring a regal floral mandap, grand entry pathway, customized Haldi/Sangeet decor, and full guest hospitality.",
      highlights: ["Custom Floral Mandap", "Grand Entry Illumination", "Full Guest Logistics"]
    },
    {
      id: "vesu-sangeet-musical-gala",
      title: "Vesu Luxury Sangeet & Musical Night",
      category: "Wedding",
      location: "Vesu Lawn Estate, Surat",
      coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "High-octane musical night with 30m LED stage backdrop, concert-grade sound arrays, interactive dancefloor lighting, and celebrity performances.",
      highlights: ["30m Stage LED Canvas", "Concert Sound Array", "Interactive Choreography"]
    },
    {
      id: "surat-corporate-brand-activation",
      title: "Surat Leadership Summit & Brand Launch",
      category: "Corporate",
      location: "Piplod Convention Center, Surat",
      coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Sleek corporate keynote setup with curved LED displays, keynote staging, product launch unveil, and executive networking lounge.",
      highlights: ["Curved LED Screen", "Product Unveil Mechanism", "VIP Lounge Design"]
    },
    {
      id: "surat-couture-fashion-runway",
      title: "Surat Fashion Week Runway",
      category: "Special",
      location: "Grand Ballroom, Surat",
      coverImage: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "High-fashion runway production with precision spotlighting, backstage coordination, live DJ stream, and designer showcases.",
      highlights: ["25m Runway Setup", "Precision Spotlighting", "Backstage Logistics"]
    }
  ],

  services: [
    {
      title: "Destination & Luxury Weddings",
      subtitle: "Full-Service Wedding Planning",
      description: "From Haldi & Sangeet concept design to grand Mandap installation, we curate unforgettable wedding experiences across Gujarat & top destination venues.",
      icon: "Music"
    },
    {
      title: "Brand Activations & Launches",
      subtitle: "Experiential Marketing",
      description: "High-impact product launches, interactive brand booths, corporate annual conventions, and dealer meets designed to elevate corporate prestige.",
      icon: "Briefcase"
    },
    {
      title: "Exhibition Curation & Fabrications",
      subtitle: "Trade Shows & Expos",
      description: "Complete exhibition planning, custom stall design, structural fabrications, VIP inaugurations, and visitor flow management.",
      icon: "Trophy"
    },
    {
      title: "Fashion Shows & Special Events",
      subtitle: "Runway & Stage Production",
      description: "High-fashion runway design, precision audio-visual direction, concert sound engineering, and artist line-up management.",
      icon: "Video"
    }
  ],

  clientele: [
    { name: "IIFD Surat", category: "Design Institute", tag: "Exhibition Partner" },
    { name: "Utsav Vatika", category: "Luxury Venue", tag: "Wedding Venue Partner" },
    { name: "Surat Trade Center", category: "Exhibition Hub", tag: "Event Venue" },
    { name: "Jewelers Association", category: "Corporate", tag: "Annual Gala" },
    { name: "Textile Leaders Forum", category: "Industry Guild", tag: "Brand Launch" },
    { name: "Real Estate Guild", category: "Corporate", tag: "Property Expo" }
  ],

  leadership: {
    quote: "“Every celebration is a canvas of emotions, precision, and unforgettable memories.”",
    founderName: "Founding Team",
    founderRole: "Colours Events & Activations Leadership",
    bio: "Based in Piplod, Surat, Colours Events & Activations is built on a passion for creative storytelling, flawless logistics, and bespoke event design. Having delivered over 680+ events, the team turns celebrations into lifetime memories.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    signatureText: "Colours Leadership"
  },

  contact: {
    email: "colourseventsofficial@gmail.com",
    phone: "+91 92282 08528",
    address: "Colours House, Sai Kutir, Plot No. 5, Udhana-Magdalla Road, Piplod, Surat, Gujarat - 395007",
    socials: [
      { name: "Instagram", url: "https://www.instagram.com/colourseventsofficial/" },
      { name: "Facebook", url: "https://www.facebook.com" },
      { name: "WhatsApp", url: "https://wa.me/919228208528" }
    ]
  }
};
