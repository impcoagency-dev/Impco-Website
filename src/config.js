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
    linkedin: "",
    x: "",
    threads: "",
    youtube: "",
    instagram: ""
  }
};

export const wa = () => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`;
export const mail = () => `mailto:${config.managementEmail}?subject=${encodeURIComponent("Project enquiry for IMPCO Agency")}&body=${encodeURIComponent("Hello IMPCO Agency,\n\nI would like to discuss a project.")}`;

export const A = "/assets/";
export const images = {
  homeHero: "For Home.png",
  homeFeature: "Home Page.png",
  homeProjects: [
    ["Character 01.jpg", "3D Designs & Animations", "3D"],
    ["AI solutions page.png", "AI Customer Platform", "AI"],
    ["Web solution page.png", "E-Commerce Experience", "WEB"],
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
    ["69e9a639b5218976f03b00eaa3d6f3a048a02954.jpg", "Mercury Business Solutions", "WEBSITES"],
    ["a0a10a40c626c98349ebd8bae844b4e308e61b16.jpg", "Nova University Community", "WEB APPS"],
    ["e1e932f17005f0eb1fc91eb1f01de12cf2aace5d.jpg", "Aura Fashion Store", "E-COMMERCE"],
    ["cbe8ecf428c219dcaa148777545768121250ca03.jpg", "Vortex SaaS Platform", "WEB APPS"],
    ["b7ac090edee70ab0c3d689e7f49c4d522542c51c.jpg", "Pulse Finance App", "APPLICATIONS"],
    ["846fbddf415f58542158044aae393ceaa44fabb3.jpg", "Lumen Architecture Studio", "WEBSITES"],
    ["b456efd8b1491faa3cc5a6e3440f0c474ad27a1e.jpg", "Orbit AI Research Hub", "WEB APPS"],
    ["5fdd6484664702d944d4cad1820b76ad1e614672.jpg", "Zenith Corporate Group", "WEBSITES"],
    ["47334532207e12e9a4117f1e93f7f7cf6f8726a8.jpg", "Cascade E-Learning Platform", "APPLICATIONS"],
    ["552ff1aae0bf60b78ae48c3efccb0f9c934e0463.jpg", "Terra Luxury Interiors", "E-COMMERCE"],
    ["76ce13a05cbc9205dbf2a82e6d7d07d907c2a7fd.jpg", "Helix Biotech Labs", "WEBSITES"],
    ["20c2a4daa8ed4242830681f4653c65eead4dc7da.jpg", "Flux Motion Studio", "OTHER"]
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