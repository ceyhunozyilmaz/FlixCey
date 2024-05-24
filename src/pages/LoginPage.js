// LoginPage.js
import React, { useEffect } from "react";
import { auth, googleProvider } from "../store/fireBaseConfig";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google", error);
      });
  };

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <div className="shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <img
            src="https://images7.alphacoders.com/851/thumb-1920-851514.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Hoşgeldiniz</h1>
          <p>
            Hesabınıza giriş yapın veya sosyal düğmeleri kullanarak yeni bir
            hesap oluşturun.
          </p>
          <button
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
            onClick={handleGoogleSignIn}
          >
            <img
              src={google}
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Google ile oturum açın</span>
          </button>
          <p className="text-sm">
            Bir sorun mu var?
            <a className="underline" href="/contact">
              {"  "}
              Bize Ulaşın
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
