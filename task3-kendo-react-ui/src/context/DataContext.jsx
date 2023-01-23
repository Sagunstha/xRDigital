import { useState, createContext } from "react";

const DataContext = createContext();

export function DataContextProvider(props) {
  const [openDialog, setOpenDialog] = useState({
    isOpen: false,
    dataItem: {},
  });

  return (
    <DataContext.Provider value={{ openDialog, setOpenDialog }}>
      {props.children}
    </DataContext.Provider>
  );
}
export default DataContext;
