import React, { createContext, useState, useEffect } from "react";

export const TitleContext = createContext({
  title: "",
  setTitle: () => {},
});

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title ? `${title} | EliteLux Homes` : "EliteLux Homes";
  }, [title]);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
