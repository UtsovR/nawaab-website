export const siteName = "NAWAAB – The Taste of Royals";
export const siteDescription =
  "Experience NAWAAB – The Taste of Royals in Kolkata. Discover signature Biryani, smoky Tandoor favourites, rich Indian classics and Indo-Chinese dishes in a warm premium dining setting.";
export const siteUrl = "https://nawaabthetasteofroyals.com";
export const socialImageUrl = `${siteUrl}/og-nawaab.webp`;

export function createSeo({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  const canonicalUrl = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;

  return {
    links: [{ rel: "canonical", href: canonicalUrl }],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: socialImageUrl },
      { property: "og:site_name", content: siteName },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImageUrl },
    ],
  };
}

export const socialLinks = {
  instagram: "https://www.instagram.com/_nawaab.restaurant_?stkn=ZGQyNXdvbW93ZWM4",
  facebook: "https://www.facebook.com/share/1Bs6kXhzpn/?mibextid=wwXIfr",
  maps: "https://maps.app.goo.gl/ziqPZu6dyvv8KpSP8",
} as const;

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "NAWAAB",
  url: siteUrl,
  image: socialImageUrl,
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
