import React, { useState } from "react";
import CardPreview from "./components/CardPreview";
import CardInput from "./components/CardInput";

const App = () => {
  const [cardData, setCardData] = useState({
    name: "",
    dob: "",
    job: "",
    superpower: "",
    bio: "",
    image: null,
    socials: {
      instagram: "",
      linkedin: "",
      twitter: "",
    },
  });

  return (
    <div className="flex justify-center min-h-screen flex-column gap-10 p-10 bg-amber-200 m-8 rounded-[3vw] shadow-lg">
      <CardInput cardData={cardData} setCardData={setCardData} />
      <CardPreview cardData={cardData} />
    </div>
  );
};

export default App;
