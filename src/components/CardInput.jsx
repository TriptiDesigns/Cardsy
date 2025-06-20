import React from "react";

const CardInput = ({ cardData, setCardData }) => {
  return (
    <div className="bg-[#FFFAED] w-[40vw] p-[5vw] rounded-[2vw] shadow-lg">
      <input
        type="text"
        placeholder="Enter your cute name"
        value={cardData.name}
        onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="What's yo job man?"
        value={cardData.job}
        onChange={(e) => setCardData({ ...cardData, job: e.target.value })}
      />

      <input
        type="text"
        placeholder="Your bdayyy"
        value={cardData.dob}
        onChange={(e) => setCardData({ ...cardData, dob: e.target.value })}
      />

      <input
        type="text"
        placeholder="Enter your secret superpower"
        value={cardData.superpower}
        onChange={(e) =>
          setCardData({ ...cardData, superpower: e.target.value })
        }
      />

      <textarea
        rows={5}
        placeholder="Enter your biography"
        value={cardData.bio}
        onChange={(e) => setCardData({ ...cardData, bio: e.target.value })}
      />

      <input
        type="text"
        placeholder="Your insta please"
        value={cardData.socials.instagram}
        onChange={(e) =>
          setCardData({ ...cardData.socials, instagram: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Your linkedIn please"
        value={cardData.socials.linkedin}
        onChange={(e) =>
          setCardData({ ...cardData.socials, linkedin: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Your twitter please"
        value={cardData.socials.twitter}
        onChange={(e) =>
          setCardData({ ...cardData.socials, twitter: e.target.value })
        }
      />
    </div>
  );
};

export default CardInput;
