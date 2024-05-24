// Header.js
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import user from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../contants/navigation";
import { auth } from "../store/fireBaseConfig";
import logo1 from "../assets/logo1.png";

const Header = () => {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3).split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);
  const [userEmail, setUserEmail] = useState(null); // Kullanıcının e-posta adresini saklamak için state'i tanımlayın
  const navigate = useNavigate();

  useEffect(() => {
    // Kullanıcı oturum durumunu izleyin
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Kullanıcı oturum açmışsa kullanıcı e-posta adresini alın
        setUserEmail(user.email);
      } else {
        // Kullanıcı oturum açmamışsa null olarak ayarlayın
        setUserEmail(null);
      }
    });

    // Aboneliği temizleyin
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    // Kullanıcı oturumunu sonlandırma
    auth.signOut().then(() => {
      // Çıkış yapıldıktan sonra anasayfaya yönlendirme
      navigate("/");
    });
  };
  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        {/* LOGO */}
        <Link to="/">
          <img src={logo1} alt="logo" width={120} />
        </Link>

        {/* NAVBAR */}
        <nav className="hidden lg:flex items-center gap-4 ml-7 text-xl">
          {navigation.map((nav, index) => {
            return (
              <div key={nav.label}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        {/* SEARCH BUTTON */}
        <div className="ml-auto flex items-center gap-12">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Arama motoru..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="text-2xl text-white hidden lg:block">
              <IoSearchOutline />
            </button>
          </form>
          {/* LOGIN */}
          {/* Eğer kullanıcı giriş yapmışsa, kullanıcının e-posta adresini ve "Çıkış Yap" butonunu gösterin */}
          {userEmail ? (
            <div className="flex items-center gap-2">
              <span className="text-white mr-2">{userEmail}</span>
              <button
                className="text-white hover:underline"
                onClick={handleLogout}
              >
                Çıkış Yap
              </button>
            </div>
          ) : (
            // Kullanıcı giriş yapmamışsa, giriş yapma butonunu gösterin
            <Link to="/login">
              <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
                <img src={user} alt="user" width="w-full h-full" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
