// =========================
// IMPCO EDITABLE SETTINGS
// =========================
// Update these values when your real email or social links are ready.

export const config = {
  brand: "IMPCO",
  managementEmail: "contact@impcoagency.agency",
  whatsapp: "447418320714",
  whatsappMessage: "Hello IMPCO, I would like to start a project.",
  socials: {
    linkedin: "https://www.linkedin.com/in/impcoagency/",
    x: "https://x.com/iamidoal",
    threads: "https://www.threads.net/@impcoagency",
    youtube: "",
    instagram: "https://www.instagram.com/impcoagency/",
    tiktok: "https://www.tiktok.com/@impco.agency?lang=en"
  }
};

export const wa = () => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`;
export const mail = () => `mailto:${config.managementEmail}?subject=${encodeURIComponent("Project enquiry for IMPCO Agency")}&body=${encodeURIComponent("Hello IMPCO Agency,\n\nI would like to discuss a project.")}`;
export const gmail = () => mail();

export const A = "/assets/";
export const images = {
  homeHero: "For Home.png",
  homeFeature: "Home Page.png",
  homeProjects: [
    ["Character 01.jpg", "3D Designs & Animations", "3D"],
    ["https://images.moneycontrol.com/static-mcnews/2024/02/BeFunky-collage-2024-02-19T175936.187.jpg", "AI Customer Platform", "AI"],
    ["https://www.entreprise20.fr/wp-content/uploads/2020/06/vid%C3%A9o-et-photo-e-commerce-1536x1024.jpg", "E-Commerce Experience", "WEB"],
    ["Branding Prototype.png", "Brand Identity System", "BRANDING"],
    ["3D solution Page.png", "Architectural Visualization", "3D"],
    ["Home Page.png", "Interactive Web App", "WEB"]
  ],
  threeD: [
    { id: "product-visualization", title: "3D Product Visualization", images: ["Bag frontview.png", "Bag backview.png", "Bag Explode.png", "Bag conceptview.png"] },
    { id: "luxury-product", title: "Luxury Product Visualization", images: ["perfume frontview.png", "perfume backview.png", "perfume boxview.png", "perfume explode view.png", "perfume conceptview.png"] },
    { id: "architectural-visualization", title: "Architectural Visualization", images: ["Exterior 03.png", "Exterior 01.png", "Exterior 04.jpg", "Exterior 05.jpg", "Exterior 06.jpg"] },
    { id: "abstract-motion", title: "Motion & Abstract 3D", images: ["abstract.png", "abstract 01.png", "abstract 02.png", "abstract 03.png"] },
    { id: "character-design", title: "3D Character Design", images: ["5972075016780629491 (3).jpg", "Character 05.jpg", "Character 04.jpg", "Character 03.jpg", "Character 02.jpg"] },
    { id: "interior-architecture", title: "Interior / Architecture", images: ["Interior 01.jpg", "Interior 02.jpg", "Interior 03.jpg", "Interior 04.jpg", "Interior 05.jpg"] },
    { id: "environment-design", title: "Environment Design", images: ["Game Environment.jpg", "Environment 02.png", "Environment 03.jpg", "Environment 05.jpg"] }
  ],
  aiProjects: [
    ["b456efd8b1491faa3cc5a6e3440f0c474ad27a1e.jpg", "AI Control Pro"],
    ["0db2a2067cfa234e5d55d39d6db0f479355b8e57.jpg", "FlowMind Automation"],
    ["0f18faaea017e577ddc35aa372af929da05341b3.jpg", "HireStream AI"],
    ["a0a10a40c626c98349ebd8bae844b4e308e61b16.jpg", "DataMind Platform"],
    ["3bb0574692f6d6cff846915e90e696a158fda39a.jpg", "Ignite Campaign AI"],
    ["5c5f840e40611baf1daeab327f611ce0d708de4f.jpg", "Pulse Web Intelligence"]
  ],
  webProjects: [
    ["https://image.thum.io/get/width/1200/https://www.cipriani.com/", "Cipriani", "HOSPITALITY", "https://www.cipriani.com/"],
    ["https://image.thum.io/get/width/1200/https://mecurybusinesssolutions.com/", "Mercury Business Solutions", "BUSINESS", "https://mecurybusinesssolutions.com/"],
    ["https://image.thum.io/get/width/1200/https://www.cor.de/", "COR.DE", "BRAND", "https://www.cor.de/"],
    ["https://image.thum.io/get/width/1200/https://flabelus.com/", "Flabelus", "LUXURY", "https://flabelus.com/"],
    ["https://image.thum.io/get/width/1200/https://www.kraken.com/", "Kraken", "FINANCE", "https://www.kraken.com/"],
    ["https://image.thum.io/get/width/1200/https://boopboopbeep.co.uk/shop/", "Boop Boop Beep", "E-COMMERCE", "https://boopboopbeep.co.uk/shop/"],
    ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", "Virgin Voyages", "TRAVEL", "https://www.virginvoyages.com/"],
    ["https://image.thum.io/get/width/1200/https://novauniversity.co/", "Nova University", "EDUCATION", "https://novauniversity.co/"],
    ["https://image.thum.io/get/width/1200/https://www.electronicexpress.com/", "Electronic Express", "RETAIL", "https://www.electronicexpress.com/"],
    ["https://image.thum.io/get/width/1200/https://dagoexpress.com/en-gb/", "Dago Express", "LOGISTICS", "https://dagoexpress.com/en-gb/"]
  ],
  branding: [
    ["f9564d7478bfd0af28a1a650fad4091e8dfb64b1.jpg", "Noir Collective"],
    ["e63f8da831f629b0e5aca8b48a297d4c8d57e785.jpg", "Solaris Studio"],
    ["b6cceaaa5ee6f25129951b6191cca60b6c887820.jpg", "Meridian Group"],
    ["8471c5c22d8c5f7d5a5ff733ce79488be298bc98.jpg", "Fauna Collective"],
    ["c7451609451ab8279472a594feb4219555d6400a.jpg", "Brand System"],
    ["1459c1d703890c61e07cd3f5d7dbdf2e32c97a57.jpg", "Campaign Identity"],
    ["7b8bd2730a3b4b16ded7d3dc02e89dd8315dcf75.jpg", "Print & Packaging"],
    ["9890e0e67b2a477dc4fdb85197bce734a7cb13b9.jpg", "Colour & Identity"]
  ]
};