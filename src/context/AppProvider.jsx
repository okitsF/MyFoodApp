import React from "react";
import { useContext, createContext, useEffect, useState } from "react";

const locker = import.meta.env.VITE_API_KEY;
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${locker}`;
const URL1 = ` https://api.spoonacular.com/recipes`;

const AppsContext = createContext();

const AppProvider = ({ children }) => {
  const [quary, setQuary] = useState("");
  const [pasta, setPasta] = useState([]);
  const [isLoad,setIsLOad] = useState(true);

  const [id, setId] = useState(null);

  const getIdof = (e) => {
    const p = e.target.id;
    setId(p);
    console.log(p);
  };

  const fetchSingleRecipes = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setId(data);
    console.log(data);
};

useEffect(() => {
  if (id != null) {
    const fetchTime = setTimeout(() => {
      fetchSingleRecipes(`${URL1}/${id}/information?apiKey=${locker}`);
      setIsLOad(false)
    }, 50);

    return () => clearInterval(fetchTime);
  }
}, [id]);

  const fetchRecipes = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setPasta(data.results);

    console.log(data.results);
  };

  useEffect(() => {
    const fetchTime = setTimeout(() => {
      fetchRecipes(`${URL}&query=${quary}`);

    }, 200);

    return () => clearTimeout(fetchTime);
  }, [quary]);

  return (
    <>
      <AppsContext.Provider value={{ quary, setQuary, pasta, URL1, locker,id,getIdof,isLoad }}>
        {children}
      </AppsContext.Provider>
    </>
  );
};

const GlobelDataContext = () => {
  return useContext(AppsContext);
};

export { AppProvider, GlobelDataContext };
