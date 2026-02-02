import { createContext, useState } from "react";
import App from "../App";

export const CountContext = createContext();
const { Provider, Consumer } = CountContext;

export const CountProvider = ({ children }) => {
  const [count , setCount] = useState(0);


    return (
     <Provider value={{ count, setCount }}>
        {children}
      </Provider>
 )
}

