import { MdHomeFilled } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { BiMovie } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
  {
    label: "Diziler",
    href: "tv",
    icon: <BiMovie />,
  },
  {
    label: "Filmler",
    href: "movie",
    icon: <RiMovie2Line />,
  },
];

export const mobileNavigation = [
  {
    label: "Ana Sayfa",
    href: "/",
    icon: <MdHomeFilled />,
  },

  ...navigation,
  {
    label: "Arama",
    href: "/search",
    icon: <IoSearchOutline />,
  },
];
