import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = `https://developer.nps.gov/api/v1/parks?StateCode="all"&limit=468&api_key=NkiGiiHbsRIOwi7BDs6MZG4UAcAsclMOR0Xo1Q7g`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [parks, setParks] = useState([]);
//The React useCallback Hook returns a memoized callback function.
// Think of memoization as caching a value so that it does not need to be recalculated
  const fetchParks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);

      const datas = await response.json();
      console.log(datas);
      const { data } = datas;
      if (data) {
        const newParks = data.map((item) => {
          const { id, url, fullName, parkCode, description, images } = item;

          return {
            idPark: id,
            name: fullName,
            code: parkCode,
            detaisl: description,
            image: images,
          };
        });
        setParks(newParks);
      } else {
        setParks([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchParks();
  }, [searchTerm, fetchParks]);
  return (
   //The <Provider> component makes the Redux store available to any nested components
      // that need to access the Redux store
      // Redux is a state container for JavaScript apps, often called a Redux store.
       //It stores the whole state of the app in an immutable object tree
    <AppContext.Provider
      value={{ loading, parks, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};


// make sure use
//When to Use Context. Context is designed to share data that can be considered “global”
//for a tree of React components, such as the current authenticated
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };