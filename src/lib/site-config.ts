export const siteName = "NAWAAB – The Taste of Royals";
export const siteDescription =
  "Experience NAWAAB – The Taste of Royals in Kolkata. Discover signature Biryani, smoky Tandoor favourites, rich Indian classics and Indo-Chinese dishes in a warm premium dining setting.";
export const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");

export const socialLinks = {
  instagram: "https://www.instagram.com/_nawaab.restaurant_?stkn=ZGQyNXdvbW93ZWM4",
  facebook: "https://www.facebook.com/share/1Heean9nWN/?mibextid=wwXIfr",
  maps: "https://maps.app.goo.gl/ziqPZu6dyvv8KpSP8",
} as const;

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "NAWAAB",
  telephone: "+91 92300 04309",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10C, Southern Avenue, Opposite Nabanalanda School",
    addressLocality: "Kolkata",
    postalCode: "700026",
    addressCountry: "IN",
  },
  servesCuisine: ["Biryani", "Indian", "Tandoor", "Indo-Chinese"],
  sameAs: [socialLinks.instagram, socialLinks.facebook],
} as const;
