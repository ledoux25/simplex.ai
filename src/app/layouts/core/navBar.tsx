"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "@/app/components/general-components/button";
import Nav from "@/app/components/general-components/nav";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { AnimatePresence } from "framer-motion";

const NavBar = ({}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-10/12 m-auto mt-[32px] z-50">
      <div className="flex items-center justify-between">
        <span className="text-[30px] font-bold tracking-widest">
          SIMPLEX{" "}
          <span className="inline-block h-2 w-2 dark:bg-kpurple bg-kpink rounded-full"></span>
        </span>

        <CiMenuFries
          className="dark:text-white md:hidden scale-[1.8]"
          onClick={() => setIsOpen(!isOpen)}
        />

        <div
          className={` md:relative fixed flex flex-col pb-6  md:block   ${
            isOpen
              ? "dar:bg-klightGrey bg-white border  w-10/12 m-auto rounded-3xl z-50 flex items-center  justify-center fade-up"
              : "hidden md:block translate-x-[4%] flex-1 "
          }`}
        >
          <AnimatePresence>
          <Nav column={isOpen} onClick={() => setIsOpen(false)}></Nav>
          </AnimatePresence>
          <div className=" items-center gap-4 md:hidden flex ">
          <Link href={`/pages/auth/${"login"}`}>
            <Button
              label="Login"
              className="bg-black text-white hover:!bg-zinc-950 px-8 h-[44px] rounded-md group relative overflow-hidden border border-white "
            ></Button>
          </Link>
          <Link href={`/pages/auth/${"signup"}`}>
            <Button label="Signup"></Button>
          </Link>
        </div>
        </div>

        <div className=" items-center gap-4 hidden md:flex ">
          <Link href={`/pages/auth/${"login"}`}>
            <Button
              label="Login"
              className="bg-black text-white hover:!bg-zinc-950 px-8 h-[44px] rounded-md group relative overflow-hidden border border-white "
            ></Button>
          </Link>
          <Link href={`/pages/auth/${"signup"}`}>
            <Button label="Signup"></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
