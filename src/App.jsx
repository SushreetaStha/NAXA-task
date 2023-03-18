import Header from "./components/header/header";
import Card from "./components/card/card";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [apiData, setApiData] = useState([]);
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://admin.naxa.com.np/api/services");
      const data = await response.json();
      setApiData(data);
    }
    getData();
  }, []);

  useEffect(() => {
    const navTitles = apiData.map((x) => {
      return { id: x.id, title: x.title };
    });
    setNavData(navTitles);
  }, [apiData]);

  return (
    <div className="mycontainer">
      <Header navData={navData} />

      {apiData.map((x) => (
        <Card data={x} />
      ))}
    </div>
  );
}

export default App;
