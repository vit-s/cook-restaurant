import React from 'react';
import Link  from "next/link";


interface NavigationItem {
  name: string,
  href: string,
  current: boolean,
}


const navigation: Navigation[] = [
  {name: 'Home', href: '#home-section', current: false},
  {name: 'About us', href: '#about-section', current: false},
  {name: 'Recipe', href: '#cook-section', current: false},
  {name: 'Gallery', href: '#gallery-section', current: false},
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


const Data = () => {
  return (
    <div className={`rounded-md max-w-sm w-full mx-auto`}>
      <div className={`flex-1 space-y-4 py-1`}>
        <div className={`sm:block`}>
          <div className={`space-y-1 px-5 pt-2 pb-3`}>
            {
              navigation.map(item => (
                <Link
                  className={classNames(item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple', 'block py-2 rounded-md text-base font-medium')}
                  aria-current={item.current ? 'page' : undefined}
                  href={item.href}
                  key={item.name}
                >
                  {item.name}
                </Link>
              ))
            }
            <div>
              <button className={`flex justify-center text-base w-full font-medium rounded-full bg-bgpink text-pink py-3 px-4 lg:px-8 navbutton hover:bg-bgpink hover:text-black`}>
                Sign In
              </button>
              <button className={`flex mt-4 justify-center text-base w-full font-medium rounded-full border border-bgpink text-pink py-3 px-4 lg:px-8 navbutton hover:bg-pink hover:text-white`}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
