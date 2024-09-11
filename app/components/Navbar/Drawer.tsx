import React, { ReactNode } from 'react';
import Image                from "next/image";
import { XMarkIcon }        from '@heroicons/react/24/outline'

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}


const Drawer = ({children, isOpen, setIsOpen}: DrawerProps) => {
  return (
    <main
      className={"fixed overflow-hidden z-10 bg-gray-100 bg-opacity-25 inset-0 transform ease-in-out " +
      (isOpen ? "transition-opacity opacity-100 duration-500 translate-x-0" : "transition-all delay-500 opacity-0 -translate-x-full ")}
    >
      <section
        className={"w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
        (isOpen ? "translate-x-0" : "-translate-x-full")}
      >
        <article className={`relative w-340px max-w-lg pb-10 flex flex-col space-y-6 h-full`}>
          <header className={`px-4 py-4 flex items-center justify-between`}>
            <div className={`flex flex-shrink-0 items-center border-right`}>
              <Image
                src={`./images/Logo/Logo.svg`}
                alt={'logo'}
                width={36}
                height={36}
              />
              <div className={`text-2xl font-semibold text-black ml-4`}>
                Cook&apos;s Kitchen
              </div>
            </div>
            <XMarkIcon
              className={`block w-6 h-6`}
              onClick={() => setIsOpen(false)}
            />
          </header>
          <div onClick={() => setIsOpen(false)}>
            {children}
          </div>
        </article>
      </section>
      {/*  Mobile Overlay Backdrop */}
      <section
        className={`w-screen h-full cursor-pointer `}
        onClick={() => setIsOpen(false)}
      >
      </section>
    </main>
  );
};

export default Drawer;
