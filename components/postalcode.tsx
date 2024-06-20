"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// Example list of supported FSAs
const supportedFSAs = ["L3X", "L4G", "L4A", "L4B", "L3P", "L6A", "L6P", "L4T", "M8V", "M2H", "M1R", "M4C", "M3C", "M3H", "M3M", "M1B", "M4B", "M4A", "L1V", "L1S", "L1M", "L1G"];

const locations = [
  { name: "Newmarket", fsa: "L3X", link: "locations/newmarket" },
  { name: "Aurora", fsa: "L4G", link: "locations/aurora" },
  { name: "Stouffville", fsa: "L4A", link: "locations/stouffville" },
  { name: "Richmond Hill", fsa: "L4B", link: "locations/richmondhill" },
  { name: "Markham", fsa: "L3P", link: "locations/markham" },
  { name: "Vaughan", fsa: "L6A", link: "locations/vaughan" },
  { name: "Brampton", fsa: "L6P", link: "locations/brampton" },
  { name: "Mississauga", fsa: "L4T", link: "locations/mississauga" },
  { name: "Etobicoke", fsa: "M8V", link: "locations/etobicoke" },
  { name: "North York", fsa: "M2H", link: "locations/northyork" },
  { name: "Toronto", fsa: "M4C", link: "locations/toronto" },
  { name: "Scarborough", fsa: "M1B", link: "locations/scarborough" },
  { name: "East York", fsa: "M4B", link: "locations/eastyork" },
  { name: "Pickering", fsa: "L1V", link: "locations/pickering" },
  { name: "Ajax", fsa: "L1S", link: "locations/ajax" },
  { name: "Whitby", fsa: "L1M", link: "locations/whitby" },
  { name: "Oshawa", fsa: "L1G", link: "locations/oshawa" },
];

export function PostalCode() {
  const [postalCode, setPostalCode] = useState("");
  const [result, setResult] = useState("");
  const [locationLink, setLocationLink] = useState("");

  // Function to validate Canadian postal code format
  const validatePostalCode = (code: string) => {
    // Remove any spaces
    code = code.replace(/\s+/g, '');
    // Regular expression to match Canadian postal code format
    const regex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    return regex.test(code);
  };

  const checkServiceAvailability = () => {
    if (!validatePostalCode(postalCode)) {
      setResult("Invalid postal code format. Please enter a valid 6-character Canadian postal code.");
      setLocationLink("");
      return;
    }

    // Extract the first three characters (FSA) and convert to uppercase
    const fsa = postalCode.substring(0, 3).toUpperCase();
    const location = locations.find(loc => loc.fsa === fsa);

    if (location) {
      setResult(`Service is available in ${location.name}!`);
      setLocationLink(location.link);
    } else {
      setResult("Sorry, we do not service your area yet.");
      setLocationLink("");
    }
  };

  return (
    <Card className="p-5 bg-gradient-to-r from-[#ffeb3b] to-[#ffc107]">
      <CardContent>
        <h2 className="font-bold text-center text-3xl m-10">Find a Gardener Near You</h2>
        <div className="flex flex-col items-center">
          <Input
            className="mb-4 outline-5"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Enter your postal code (XXX XXX)"
            maxLength={7} // Allowing space for format flexibility
          />
          <Button variant="outline" onClick={checkServiceAvailability}>Check</Button>
        </div>
        {result && <p className="text-center mt-4 font-semibold">{result}</p>}
        {locationLink && (
          <div className="flex justify-center mt-4">
            <Button variant="outline" onClick={() => window.open(locationLink, "_blank")}>Go to Location Page</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}