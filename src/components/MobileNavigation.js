import React from "react";
import { mobileNavigation } from "../contants/navigation";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <section className="lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full">
      <div className="flex items-center justify-between h-full">
        {mobileNavigation.map((nav, index) => {
          return (
            <NavLink
              key={nav.label + "mobileNavigation"}
              className={(isActive) =>
                `px-3 flex h-full items-center flex-col justify-center`
              }
            >
              <div className="text-2xl"> {nav.icon}</div>
              <p className="text-md">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
