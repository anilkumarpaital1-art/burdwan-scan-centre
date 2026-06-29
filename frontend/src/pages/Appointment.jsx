import { useEffect } from "react";

export default function Appointment() {
  useEffect(() => {
    window.open(
      "https://nextgenlabplus.com/test_book_form_cust.php?getclientcd=CL24997550",
      "_blank"
    );

    // Optional: return to home page
    window.location.href = "/";
  }, []);

  return null;
}