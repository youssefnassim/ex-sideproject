import { useState } from "react";
import CopiableText from "components/CopiableText";

export default function Contact() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  return (
    <>
      {isEmailVisible ? (
        <CopiableText>hi@youssefnassim.com</CopiableText>
      ) : (
        <span
          className="border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800/80 dark:hover:border-neutral-500 transition cursor-pointer"
          onClick={() => setIsEmailVisible(true)}
        >
          Email address
        </span>
      )}
    </>
  );
}
