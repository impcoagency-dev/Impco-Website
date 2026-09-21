// =========================
// IMPCO EDITABLE SETTINGS
// =========================
// Change these values when your real email/social accounts are ready.
// Image filenames below point to the actual assets supplied in the ZIP.

export const config = {
  brand: "IMPCO",
  managementEmail: "hello@impcoagency.com",
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
export const mail = () => `mailto:${config.managementEmail}`;

export const A = "/assets/";
export const images = {
  homeHero: "For Home.png",
  homeFeature: "34101ac632ef2b8b4963fd4391bc2e8d2c5f80d6.jpg",
  homeProjects: [
    ["Character 01.jpg","3D Designs & Animations","3D"],
    ["091c899264a7cbb635529e5827ba3da92de0d6e3.jpg","AI Customer Platform","AI"],
    ["a3b4a77df7cdb0c25797e83eedcea6854fdc83f1.jpg","E-Commerce Experience","WEB"],
    ["9890e0e67b2a477dc4fdb85197bce734a7cb13b9.jpg","Brand Identity System","BRANDING"],
    ["4239dd6f380c4a9e9d2580b5b1f8d998d01b0650.jpg","Architectural Visualization","3D"],
    ["fa63fc91bf2974039267efd46abb11c5369ae726.jpg","Interactive Web App","WEB"]
  ],
  // Add, remove, replace or reorder up to 5 paths inside a project's images array.
  threeD: [
    {id: "product-visualization", title: "3D Design — Product Visualization", images: ["Bag frontview.png", "Bag backview.png", "Bag Explode.png", "Bag conceptview.png"]},
    {id: "luxury-product", title: "Luxury Product Visualization", images: ["perfume frontview.png", "perfume backview.png", "perfume boxview.png", "perfume explode view.png", "perfume conceptview.png"]},
    {id: "architectural-visualization", title: "Architectural Visualization", images: ["Exterior 03.png", "Exterior 01.png", "Exterior 04.jpg", "Exterior 05.jpg", "Exterior 06.jpg"]},
    {id: "abstract-motion", title: "Motion & Abstract 3D", images: ["786be98699c61269dacc750eb68a2986696eb188.jpg", "abstract.png", "abstract 01.png", "abstract 02.png", "abstract 03.png"]},
    {id: "character-design", title: "3D Character Design", images: ["5972075016780629491 (3).jpg", "Character 05.jpg", "Character 04.jpg", "Character 03.jpg", "Character 02.jpg"]},
    {id: "character-detail", title: "3D Character Detail", images: ["27f8f0dd6eda2db3071762bdf995884fc8ac3434.jpg", "ae2828f35804bcc9c2c4144e886e3cd46ad15fb5.jpg", "786be98699c61269dacc750eb68a2986696eb188.jpg", "a9e95c6362ea44d30e0e8c4907aa337725c767d9.jpg", "be935885ef5048645d5e08deea5e5c387274c86c.jpg"]},
    {id: "interior-visualization", title: "Interior Visualization", images: ["d62f5fb308a5e035a96935aa800c762561f77069.jpg", "2836da313f34dbb5098d70ec7bbde294c0dce865.jpg", "3345db023b733d46b651607784f93c54be9617ac.jpg", "ed8170fa6d8b724b89c53c5a583abd2dfbf5dd48.jpg", "9b1d88418ed768c46204c3a5a39cd6694caac460.jpg"]},
    {id: "character-rigging", title: "Character Rigging", images: ["540bb8b0eb8b51687c4610dbeba1e9bb0bd8282a.jpg", "be935885ef5048645d5e08deea5e5c387274c86c.jpg", "d7edf2c6292a171e740dfaf3269636a3d97161e0.jpg", "a9e95c6362ea44d30e0e8c4907aa337725c767d9.jpg", "786be98699c61269dacc750eb68a2986696eb188.jpg"]},
    {id: "abstract-render", title: "Abstract 3D Motion", images: ["a9e95c6362ea44d30e0e8c4907aa337725c767d9.jpg", "786be98699c61269dacc750eb68a2986696eb188.jpg", "540bb8b0eb8b51687c4610dbeba1e9bb0bd8282a.jpg", "27f8f0dd6eda2db3071762bdf995884fc8ac3434.jpg", "ae2828f35804bcc9c2c4144e886e3cd46ad15fb5.jpg"]},
    {id: "interior-architecture", title: "Interior / Architecture", images: ["Interior 01.jpg", "Interior 02.jpg", "Interior 03.jpg", "Interior 04.jpg", "Interior 05.jpg"]},
    {id: "environment-design", title: "Environment Design", images: ["Game Environment.jpg", "Environment 02.png", "Environment 03.jpg", "Environment 05.jpg", "Game Environment.jpg"]},
    {id: "interior-lighting", title: "Interior Lighting", images: ["3345db023b733d46b651607784f93c54be9617ac.jpg", "d62f5fb308a5e035a96935aa800c762561f77069.jpg", "2836da313f34dbb5098d70ec7bbde294c0dce865.jpg", "9b1d88418ed768c46204c3a5a39cd6694caac460.jpg", "ed8170fa6d8b724b89c53c5a583abd2dfbf5dd48.jpg"]}
  ],
  aiProjects: [
    ["b456efd8b1491faa3cc5a6e3440f0c474ad27a1e.jpg","AI Control Pro"],
    ["0db2a2067cfa234e5d55d39d6db0f479355b8e57.jpg","FlowMind Automation"],
    ["0f18faaea017e577ddc35aa372af929da05341b3.jpg","HireStream AI"],
    ["a0a10a40c626c98349ebd8bae844b4e308e61b16.jpg","DataMind Platform"],
    ["3bb0574692f6d6cff846915e90e696a158fda39a.jpg","Ignite Campaign AI"],
    ["5c5f840e40611baf1daeab327f611ce0d708de4f.jpg","Pulse Web Intelligence"]
  ],
  webProjects: [
    ["69e9a639b5218976f03b00eaa3d6f3a048a02954.jpg","Mercury Business Solutions","WEBSITES"],
    ["a0a10a40c626c98349ebd8bae844b4e308e61b16.jpg","Nova University Community","WEB APPS"],
    ["e1e932f17005f0eb1fc91eb1f01de12cf2aace5d.jpg","Aura Fashion Store","E-COMMERCE"],
    ["cbe8ecf428c219dcaa148777545768121250ca03.jpg","Vortex SaaS Platform","WEB APPS"],
    ["b7ac090edee70ab0c3d689e7f49c4d522542c51c.jpg","Pulse Finance App","APPLICATIONS"],
    ["846fbddf415f58542158044aae393ceaa44fabb3.jpg","Lumen Architecture Studio","WEBSITES"],
    ["b456efd8b1491faa3cc5a6e3440f0c474ad27a1e.jpg","Orbit AI Research Hub","WEB APPS"],
    ["5fdd6484664702d944d4cad1820b76ad1e614672.jpg","Zenith Corporate Group","WEBSITES"],
    ["47334532207e12e9a4117f1e93f7f7cf6f8726a8.jpg","Cascade E-Learning Platform","APPLICATIONS"],
    ["552ff1aae0bf60b78ae48c3efccb0f9c934e0463.jpg","Terra Luxury Interiors","E-COMMERCE"],
    ["76ce13a05cbc9205dbf2a82e6d7d07d907c2a7fd.jpg","Helix Biotech Labs","WEBSITES"],
    ["20c2a4daa8ed4242830681f4653c65eead4dc7da.jpg","Flux Motion Studio","OTHER"]
  ],
  branding: [
    ["f9564d7478bfd0af28a1a650fad4091e8dfb64b1.jpg","Noir Collective"],
    ["e63f8da831f629b0e5aca8b48a297d4c8d57e785.jpg","Solaris Studio"],
    ["b6cceaaa5ee6f25129951b6191cca60b6c887820.jpg","Meridian Group"],
    ["8471c5c22d8c5f7d5a5ff733ce79488be298bc98.jpg","Fauna Collective"],
    ["c7451609451ab8279472a594feb4219555d6400a.jpg","Brand System"],
    ["1459c1d703890c61e07cd3f5d7dbdf2e32c97a57.jpg","Campaign Identity"],
    ["7b8bd2730a3b4b16ded7d3dc02e89dd8315dcf75.jpg","Print & Packaging"],
    ["9890e0e67b2a477dc4fdb85197bce734a7cb13b9.jpg","Colour & Identity"]
  ]
};