import { createContext, useContext, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Anime from "./pages/anime/Anime";
import Cartoon from "./pages/cartoon/Cartoon";
import Films from "./pages/films/Films";

import Horror from "./pages/horror/Horror";
import Drama from "./pages/drama/Drama";
import Comedy from "./pages/comedy/Comedy";
import Documentary from "./pages/documentary/Documentary";
import Action from "./pages/action/Action";
import Footer from "./components/footer/Footer";

export const FavContext = createContext(null);
function App() {
  const [favData, setFavData] = useState([
    {
      id: 134,
      age: "16+",
      time: "2 HOURS",
      desc: "Nothing is what it seems when a twisted one-night stand spirals into a serial killer's vicious murder spree.",
      tags: ["#horror"],
      actors: ["Willa Fitzgerald"],
      productName: " Strange Darling ",
      productImage:
        "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/231334/StrangeDarling-1600.jpg",
    },
  ]);

  return (
    <FavContext.Provider value={{ favData: favData, favFun: setFavData }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/cartoon" element={<Cartoon />} />
          <Route path="/films" element={<Films />} />

          <Route path="/film-horror" element={<Horror />} />

          <Route path="/film-drama" element={<Drama />} />

          <Route path="/film-comedy" element={<Comedy />} />

          <Route path="/film-documentary" element={<Documentary />} />

          <Route path="/film-action" element={<Action />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FavContext.Provider>
  );
}

export default App;
