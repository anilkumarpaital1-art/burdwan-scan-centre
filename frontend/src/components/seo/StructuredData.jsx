import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Burdwan Scan Centre",
    image: "https://burdwanscancentre.com/logo.png",
    url: "https://burdwanscancentre.com",
    telephone: "+91 8373070572",
    email: "bscpl_bdn@rediffmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "7, R. B. Ghosh Road, Khoshbagan, Just behind the Khoshbagan Masjid",
      addressLocality: "Burdwan",
      addressRegion: "West Bengal",
      postalCode: "713101",
      addressCountry: "IN"
    },
    openingHours: "Mo-Sa 07:00-21:00",
    priceRange: "₹₹",
    areaServed: "Burdwan",
    hasMap:
      "https://www.google.com/maps?q=Burdwan+Scan+Centre+Burdwan"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;