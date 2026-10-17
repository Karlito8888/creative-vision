import type { ImageMetadata } from "astro";

export const site = {
  name: "Creative Vision",
  legalName: "Creative Vision International Trading LLC",
  tagline: "Your Vision is our Mission",
  description:
    "Creative Vision designs and builds exhibition stands, kiosks, showroom fit-outs, signage, awards and corporate gifts across Dubai, Riyadh and the GCC.",
  email: "info@creativevisionintl.com",
  phone: "+971 52 614 2870",
  phoneHref: "tel:+971526142870",
  whatsapp: "https://wa.me/971526142870",
  address: "Dubai, UAE",
  catalog: "/pdf/catalogs/CreativeVisionInt.pdf",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const photos = import.meta.glob<ImageMetadata>("./assets/images/gallery/*/*.webp", {
  eager: true,
  import: "default",
});

function folder(name: string): ImageMetadata[] {
  return Object.entries(photos)
    .filter(([path]) => path.includes(`/gallery/${name}/`))
    .sort(([a], [b]) => Number(a.match(/\/(\d+)-/)?.[1]) - Number(b.match(/\/(\d+)-/)?.[1]))
    .map(([, img]) => img);
}

export type Category = {
  slug: string;
  title: string;
  blurb: string;
  photos: ImageMetadata[];
  /** Index of the photo shown as the category cover on the home page. */
  cover: number;
};

export const categories: Category[] = [
  {
    slug: "exhibitions",
    cover: 2,
    title: "Exhibition Stands",
    blurb: "Custom booths built around your corporate identity, from concept to show floor.",
    photos: folder("events"),
  },
  {
    slug: "interiors",
    cover: 12,
    title: "Interiors & Kiosks",
    blurb: "Turnkey fit-outs for showrooms, offices, reception areas and mall kiosks.",
    photos: folder("archint"),
  },
  {
    slug: "awards",
    cover: 0,
    title: "Awards & Trophies",
    blurb: "Custom-made awards, plaques and medals for special recognition.",
    photos: folder("awards"),
  },
  {
    slug: "gifts",
    cover: 0,
    title: "Corporate Gifts & Uniforms",
    blurb: "Branded merchandise, uniforms and gift sets that carry your message.",
    photos: folder("gift"),
  },
  {
    slug: "signage",
    cover: 4,
    title: "Signage",
    blurb: "Illuminated shop signs, wayfinding and safety signage in Arabic and English.",
    photos: folder("others"),
  },
];

export const services = [
  {
    title: "Indoor & Outdoor Kiosks",
    summary: "Bespoke solutions with a comprehensive design process, from concept to execution.",
    description:
      "We provide a bespoke solution by engaging our clients throughout the entire design process. A comprehensive and personal dialogue allows us to ensure that each design addresses the client's exact needs, promising the perfect fusion of visual and practical considerations. Our main areas of expertise consist of concept design and feasibility, space analysis, design consultancy, design and build, project management, and fit out management.",
    image: categories[1].photos[10],
  },
  {
    title: "Exhibition Stands",
    summary: "Custom exhibition booth designs that showcase your corporate identity.",
    description:
      "Our designers don't just get a brief and start to conceptualize. We value our customers so much that we take each project individually and focus on their branding and the message they want to get across to their customers. We bring your company to the exhibition by building your booth with your corporate identity all over the show.",
    image: categories[0].photos[8],
  },
  {
    title: "Corporate Gift Items",
    summary: "A wide selection of corporate gifts that perfectly represent your brand.",
    description:
      "Gift items convey your message to the customers and should have a touch of your company's core products and services. It is easy to make a perfect gift when choosing from a wide array of comprehensive product catalogue. Our gift items cover all major product categories from functional items, traditional, new technology gadgets and accessories, allowing you to find the item that best represents your company to your customers.",
    image: categories[3].photos[4],
  },
];

export const moreServices = [
  { title: "Architecture & Interiors", text: "Design, layout planning and interior fit-out for showrooms, offices and restaurants." },
  { title: "Awards & Trophies", text: "Custom-made awards and trophies for special recognition." },
  { title: "Stands & Signage", text: "Visual merchandising, window displays, VM props and signage solutions." },
  { title: "Shop Fittings", text: "Design and manufacture of shop fittings and merchandising implementation." },
];

const logoFiles = import.meta.glob<ImageMetadata>("./assets/logos/*", {
  eager: true,
  import: "default",
});

const logoNames: Record<string, string> = {
  "050": "050",
  "april-beauty": "April Beauty",
  axiom: "Axiom",
  bosch: "Bosch",
  "docib-healthcare": "Docib Healthcare",
  electrolux: "Electrolux",
  fares: "Fares",
  hotpack: "Hotpack",
  indesit: "Indesit",
  jawhara: "Jawhara",
  lootah: "Lootah",
  philips: "Philips",
  rasasi: "Rasasi",
  samsung: "Samsung",
  sawalef: "Sawalef",
  siemens: "Siemens",
  "swiss-arabian": "Swiss Arabian",
};

export const clients = Object.entries(logoFiles).map(([path, img]) => {
  const key = path.split("/").pop()!.replace(/\.\w+$/, "");
  return { name: logoNames[key] ?? key, img };
});
