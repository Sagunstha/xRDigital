import { useEffect, useState } from "react";
import GridWithForm from "../components/grid/GridWithForm";
import axios from "axios";

const GridPage = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    axios
      .get("https://623abb71b5292b8bfcb8eeff.mockapi.io/grid")
      .then((res) => {
        // console.log(res.data);
        setLoadedData(res.data);
      })
      .catch();
  }, []);

  const onEdit = () => {
    setOpenDialog(true);
  };
  const onDelete = () => {
    console.log("delete");
  };

  const onAdd = () => {
    setOpenDialog(true);
    console.log("first");
  };
  return (
    <div>
      GridPage
      <GridWithForm
        item={loadedData}
        onEditHandler={onEdit}
        onDeleteHandler={onDelete}
        openDialog={openDialog}
        onAddHandler={onAdd}
        setOpenDialog={setOpenDialog}
      />
    </div>
  );
};

export default GridPage;
