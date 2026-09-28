// SASSY LADY SHOES
// Eastgate Centre, Stall F26, Harare.
// Generic fashion imagery is used because verified Sassy Lady
// inventory photos were not provided.

export const SITE = {
  brand: "SASSY LADY SHOES",
  tagline: "Heels, Flats & Everything In Between",
  subtagline:
    "Women's footwear for every day and every occasion — heels, flats, sneakers, sandals and boots at Eastgate Centre.",

  addressLine1: "Eastgate Centre, Stall F26",
  addressLine2: "Robert Mugabe Rd, Harare",

  hours: "See WhatsApp for hours",
  status: "Message Us On WhatsApp",

  whatsapp: "263772297600",
  phoneDisplay: "077 229 7600",

  instagram:
    "https://www.facebook.com/search/top?q=Sassy%20Lady%20Shoes",

  facebook:
    "https://www.facebook.com/search/top?q=Sassy%20Lady%20Shoes",

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Eastgate+Centre+Harare",
};


// ------------------------------------------------------------
// SASSY LADY IMAGE LIBRARY
// Generic footwear/fashion photography.
// Images are from Pexels and are free to use.
// ------------------------------------------------------------

export const IMAGES = {

  // HERO
  // Woman/fashion/heels rather than a random landscape.
  hero: "/hero.jpg", 

  // EDITORIAL / FEATURED LOOK
  edit:
    "https://images.pexels.com/photos/16895105/pexels-photo-16895105.jpeg",

  // HEELS
  dress:
    "https://images.pexels.com/photos/26850888/pexels-photo-26850888.jpeg",

  // FLATS
  top:
    "https://images.pexels.com/photos/14816287/pexels-photo-14816287.jpeg",

  // SNEAKERS
  blazer:
    "https://images.pexels.com/photos/18804985/pexels-photo-18804985.jpeg",

  // SANDALS
  set:
    "https://images.pexels.com/photos/8788696/pexels-photo-8788696.jpeg",

  // BOOTS
  shoes:
    "https://images.pexels.com/photos/27174561/pexels-photo-27174561.jpeg",

  // WEDGES
  bag:
    "https://images.pexels.com/photos/26925245/pexels-photo-26925245.jpeg",


  // ----------------------------------------------------------
  // CATEGORY IMAGES
  // ----------------------------------------------------------

  catDresses:
    "https://images.pexels.com/photos/26850888/pexels-photo-26850888.jpeg",

  catTops:
    "https://images.pexels.com/photos/14816287/pexels-photo-14816287.jpeg",

  catOuterwear:
    "https://images.pexels.com/photos/27008321/pexels-photo-27008321.jpeg",

  catSets:
    "https://images.pexels.com/photos/8788696/pexels-photo-8788696.jpeg",

  catShoes:
    "https://images.pexels.com/photos/27174561/pexels-photo-27174561.jpeg",

  catAccessories:
    "https://images.pexels.com/photos/26925245/pexels-photo-26925245.jpeg",
};


export const CATEGORIES = [
  {
    name: "Heels",
    image: IMAGES.catDresses,
  },

  {
    name: "Flats",
    image: IMAGES.catTops,
  },

  {
    name: "Sneakers",
    image: IMAGES.catOuterwear,
  },

  {
    name: "Sandals",
    image: IMAGES.catSets,
  },

  {
    name: "Boots",
    image: IMAGES.catShoes,
  },

  {
    name: "Wedges",
    image: IMAGES.catAccessories,
  },
];


export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}


export function productEnquiryLink(product, size) {
  const msg =
    `Hi Sassy Lady, I'm interested in the ${product.name}` +
    `${size ? ` in size ${size}` : ""}. Is it in stock?`;

  return whatsappLink(msg);
}
