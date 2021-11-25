import { createContext, useContext, useState } from "react";

const SenderContext = createContext({
  apiData: null,
  setData: (d) => {},
});

export const useSender = () => useContext(SenderContext);

function Sender({ children }) {
  // Shareable state between components
  const [fullData, setData] = useState(null);

  const setDEvent = (d) => {
    setData(d);
  };

  const value = { d, setDEvent };

  return (
    <SenderContext.Provider value={value}>{children}</SenderContext.Provider>
  );
}

export default Sender;
