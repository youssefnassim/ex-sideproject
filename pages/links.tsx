import type { NextPage } from "next";
import FilterablePostFeed from "components/FilterablePostFeed";
import GreenEmojiFace from "components/GreenEmojiFace";
import Link from "next/link";
import PageSwitcher from "components/PageSwitcher";
import { useState } from "react";
import CopiableText from "components/CopiableText";

const Home: NextPage = () => {
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  const Contact = ({ className }: { className: string }) =>
    isEmailVisible ? (
      <CopiableText>youssef@boringstuff.net</CopiableText>
    ) : (
      <span className={className} onClick={() => setIsEmailVisible(true)}>
        Contact
      </span>
    );

  return (
    <div className="mb-32">
      <header className=" pt-20 w-3/5 mx-auto mb-6 flex flex-wrap justify-center">
        <div className="w-full mb-10 font-['marydale'] font-bold uppercase text-[55px] text-center leading-none tracking-tighter flex justify-center">
          Boring <br />
          Stuff
        </div>
      </header>
      <main className="w-1/2 mx-auto relative text-center">
        <GreenEmojiFace />
        <h2 className="uppercase hp-uppercase-text font-medium mb-2">
          <Link href="">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-black transition">
              Github
            </a>
          </Link>
        </h2>
        <h2 className="uppercase hp-uppercase-text font-medium mb-2">
          <Link href="">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-black transition">
              Twitter
            </a>
          </Link>
        </h2>
        <h2 className="uppercase hp-uppercase-text font-medium mb-2">
          <Link href="">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-black transition">
              Linkedin
            </a>
          </Link>
        </h2>
        <h2 className="uppercase hp-uppercase-text font-medium mb-2">
          <Link href="newsletter">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-black transition">
              Newsletter
            </a>
          </Link>
        </h2>
        <h2 className="uppercase hp-uppercase-text font-medium mb-2">
          <Contact className="border-b-4 border-transparent hover:border-b-4 hover:border-black hover:cursor-pointer transition" />
        </h2>
      </main>
      <PageSwitcher />
    </div>
  );
};

export default Home;
