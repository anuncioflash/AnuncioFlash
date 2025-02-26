import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Helmet } from "react-helmet";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const categories = ["Inmuebles", "Empleo", "Servicios", "Motor", "Tecnología", "Otros"];

export default function PublicidadDinamica() {
  const [user, setUser] = useState(null);
  const [ads, setAds] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showFAQ, setShowFAQ] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "ads"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAds(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      toast.success("Inicio de sesión exitoso");
    } catch (error) {
      toast.error("Error al iniciar sesión");
    }
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "your-paypal-client-id" }}>
      <Helmet>
        <title>AnuncioFlash - Tu empresa, vista por miles</title>
        <meta name="description" content="Plataforma de anuncios clasificados para empresas. Publica tu anuncio y gana visibilidad." />
      </Helmet>

      <div className="p-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-2 text-gray-800">AnuncioFlash</h1>
        <p className="text-2xl font-semibold text-blue-600">Tu empresa, vista por miles</p>
        <p className="text-xl mb-6 text-gray-600">Encuentra o publica anuncios en segundos</p>

        {!user ? (
          <Button onClick={handleLogin} className="mb-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">Iniciar sesión con Google</Button>
        ) : (
          <p className="text-lg font-semibold mb-2">Bienvenido, {user.displayName}</p>
        )}

        <div className="mt-6 mb-6">
          <label className="text-lg font-semibold">Filtrar por categoría:</label>
          <select
            className="p-2 border rounded-lg ml-2"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">Todas</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <motion.div key={ad.id} whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-md bg-white hover:shadow-xl transition-all">
              <h2 className="text-xl font-semibold">{ad.content}</h2>
              <p className="text-sm font-light">Categoría: {ad.category}</p>
              <p className="text-sm font-light">Vistas: {ad.views} | Clics: {ad.clicks}</p>
            </motion.div>
          ))}
        </div>

        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
      </div>
    </PayPalScriptProvider>
  );
}
