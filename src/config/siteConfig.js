export const siteConfig = {
  brandName: "COLOURS",
  brandSubtitle: "ENTERTAINMENT NETWORKS",
  logoUrl: "/assets/logo.png",
  heroTitle: "Entertainment Redefined.",
  heroTagline: "Crafting Unforgettable Live Spectacles Worldwide.",
  
  // Replace this video URL or local file path (/assets/your-video.mp4) with your own hero video reel
  heroVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-concert-crowd-cheering-in-front-of-the-stage-41474-large.mp4",
  heroVideoPoster: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1920",

  aboutStatement: "Pioneers in live music, stadium sports & immersive event production, creating monumental experiences across the globe.",
  
  stats: [
    { number: "40+", label: "Years of Heritage", description: "Pioneering live event production" },
    { number: "650+", label: "Events per Year", description: "Executed seamlessly across continents" },
    { number: "7", label: "Global Hubs", description: "Production centers & broadcast units" },
    { number: "12M+", label: "Audience Impact", description: "Fans engaged in live stadiums" }
  ],

  menuItems: [
    { label: "Home", href: "/" },
    { 
      label: "Work", 
      href: "/work",
      hoverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
      subCategories: [
        { name: "Sports Events", href: "/work?category=Sports" },
        { name: "Music Festivals", href: "/work?category=Music" },
        { name: "Corporate Summits", href: "/work?category=Corporate" },
        { name: "Special Spectacles", href: "/work?category=Special" }
      ]
    },
    { 
      label: "Services", 
      href: "/services",
      hoverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200"
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
      id: "world-cricket-trophy-reveal",
      title: "Global Sports League Championship",
      category: "Sports",
      location: "Wankhede Stadium, Mumbai",
      coverImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "End-to-end stadium branding, laser light choreography, high-octane pyro display, and live global broadcast execution for 50,000+ stadium spectators.",
      highlights: ["50,000+ Live Audience", "3D Projection Mapping", "Ultra-HD Live Broadcast Feed"]
    },
    {
      id: "electric-horizon-music-fest",
      title: "Electric Horizon Arena World Tour",
      category: "Music",
      location: "Bandra-Kurla Grounds",
      coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "A monumental 3-day outdoor music arena featuring custom 40-meter LED mainstage architecture, synchronized flame cannons, and spatial Dolby sound systems.",
      highlights: ["75,000+ Fans", "Custom 40m Stage Rig", "120kw Sound Array"]
    },
    {
      id: "apex-tech-summit-2026",
      title: "Apex Next-Gen Brand Keynote",
      category: "Corporate",
      location: "Jio World Convention Centre",
      coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Futuristic corporate reveal with seamless curved LED walls, AI interaction pods, hologram keynotes, and executive lounge design.",
      highlights: ["Hologram Keynote", "Curved LED Canvas", "VIP Executive Experience"]
    },
    {
      id: "royal-palace-heritage-gala",
      title: "Royal Palace Heritage Spectacle",
      category: "Special",
      location: "Shivavilas Palace Estate",
      coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Regal heritage event combining vintage architectural illumination, orchestral stage setups, and luxury guest management.",
      highlights: ["Heritage Illumination", "Orchestral Production", "Luxury Concierge"]
    },
    {
      id: "vanguard-automotive-launch",
      title: "Vanguard EV Global Unveil",
      category: "Corporate",
      location: "New Delhi Expo Mart",
      coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Automotive kinetic glass reveal, real-time telemetry screen sync, and immersive media launch.",
      highlights: ["Kinetic Glass Rigging", "Real-Time Telemetry", "Global Media Stream"]
    },
    {
      id: "stadium-symphony-super-cup",
      title: "National Premier League Final Ceremony",
      category: "Sports",
      location: "Kolkata Stadium Complex",
      coverImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Full-field light show with drone swarm choreography, live musical performances, and medal presentation stage production.",
      highlights: ["Drone Swarm Show", "Full Stadium Light Grid", "60,000 Attendance"]
    }
  ],

  services: [
    {
      title: "Stadium & Sports Engineering",
      subtitle: "Turnkey Sports Production",
      description: "From FIFA & IPL scale league openers to championship trophy ceremonies, we engineer pitch branding, LED perimeters, stadium lighting, and broadcast integration.",
      icon: "Trophy"
    },
    {
      title: "Mega Concert Production",
      subtitle: "World Tour Arenas",
      description: "Custom trussing, 3D spatial acoustic engineering, dynamic video wall scenery, pyrotechnics, and artist hospitality for stadium music tours.",
      icon: "Music"
    },
    {
      title: "Corporate Experience Design",
      subtitle: "Keynotes & Brand Launches",
      description: "Immersive keynotes, product unveils, multi-city dealer meets, and high-impact brand activations tailored for Fortune 500 leaders.",
      icon: "Briefcase"
    },
    {
      title: "Broadcast & Technical Direction",
      subtitle: "Live Stream & Media Directing",
      description: "Multi-camera live broadcast, real-time AR graphic overlays, satellite linkups, and seamless hybrid streaming infrastructure.",
      icon: "Video"
    }
  ],

  clientele: [
    { name: "Coca Cola", category: "Beverages", tag: "Global Partner" },
    { name: "Red Bull", category: "Energy & Sports", tag: "Event Production" },
    { name: "Cricket Board", category: "Sports Governing Body", tag: "League Partner" },
    { name: "Spotify", category: "Music & Entertainment", tag: "Concert Series" },
    { name: "Samsung", category: "Technology", tag: "Product Launches" },
    { name: "BMW", category: "Automotive", tag: "Experience Center" },
    { name: "PWC", category: "Consulting", tag: "Global Summits" },
    { name: "Bosch", category: "Engineering", tag: "Annual Convention" },
    { name: "Tata Enterprises", category: "Conglomerate", tag: "Brand Activations" },
    { name: "Nike", category: "Sportswear", tag: "Stadium Activations" },
    { name: "Sony Music", category: "Entertainment", tag: "Artist Arena Tours" },
    { name: "Royal Challengers", category: "Sports Franchise", tag: "Unbox Ceremonies" }
  ],

  leadership: {
    quote: "“You are only as good as your last show.”",
    founderName: "Dr. T. Venkat Vardhan",
    founderRole: "Founder & Managing Director",
    bio: "A visionary disruptor with over four decades of pioneering leadership in live music, mega sports events, and world-class entertainment infrastructure. Under his guidance, COLOURS has delivered over 10,000 landmark events.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    signatureText: "Venkat Vardhan"
  },

  contact: {
    email: "connect@colourevents.com",
    phone: "+91 80 4112 8888",
    address: "COLOURS Corporate Tower, Indiranagar, Bengaluru, KA 560038",
    socials: [
      { name: "Instagram", url: "https://instagram.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "YouTube", url: "https://youtube.com" },
      { name: "X", url: "https://x.com" }
    ]
  }
};
