import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Inicio", to: "/", current: false },
  { name: "Servicios", to: "/servicios", current: false },
  { name: "Contactos", to: "/contactos", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const [currentNavigation, setCurrentNavigation] = useState(null);
  window.scrollTo(0, 0);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0F172A] z-10">
      <Disclosure>
        {({ open, close }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                        onClick={() => close()}
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6"
                        aria-hidden="true"
                        onClick={() => close()}
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <span className="text-zinc-50 font-serif text-2xl">
                      FlowSoft
                    </span>
                  </div>
                  <div className="hidden sm:block ml-auto">
                    <div className="flex space-x-4 ">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            "text-zinc-50 hover:bg-gray-700 hover:text-zinc-50",
                            "rounded-md px-3 py-2 text-sm font-medium",
                            {
                              "bg-gray-700 text-zinc-50":
                                item.to === currentNavigation,
                            }
                          )}
                          onClick={() => {
                            setCurrentNavigation(item.to);
                            close();
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium",
                      {
                        "bg-gray-700 text-white": item.to === currentNavigation,
                      }
                    )}
                    onClick={() => {
                      setCurrentNavigation(item.to);
                      close();
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
