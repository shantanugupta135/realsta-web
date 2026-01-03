import ContactUs from "@/components/ContactUs/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";

import { Suspense } from "react";

export default function PropertyPage() {
  return(
     <Suspense fallback={<div>Loading...</div>}>
     <ContactUs/>
  </Suspense>
);
}