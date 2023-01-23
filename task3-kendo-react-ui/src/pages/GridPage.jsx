import { useEffect, useState } from "react";
import GridWithForm from "../components/grid/GridWithForm";
import axios from "axios";
import DataContext from "../context/DataContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GridPage = () => {
  const { openDialog, setOpenDialog } = useContext(DataContext);
  const [loadedData, setLoadedData] = useState([]);
  const endpoint = "http://localhost:3300/products";

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        setLoadedData(res.data);
      })
      .catch();
  }, []);

  const onEdit = (dataItem) => {
    setOpenDialog({ isOpen: true, dataItem: dataItem });
    console.log("dataItem", dataItem);
  };
  const onDelete = async (data) => {
    const res = await axios.delete(`${endpoint}/${data.dataItem.id}`);
    if (res.status === 200) {
      toast.success("Item Deleted Successfully");
    } else {
      toast.error("error");
    }

    // console.log("delete", data);
  };

  const onAdd = () => {
    setOpenDialog({ isOpen: true, dataItem: {} });

    // console.log("first");
  };
  // const onSubmit = (data) => {
  //   axios.post(endpoint, data).then(<ToastContainer/>);
  //   console.log("Your Data has been successfully added");

  //   setOpenDialog({ isOpen: false });
  // };
  const onSubmit = (data) => {
    axios
      .post(endpoint, data)
      .then((response) => {
        setOpenDialog({ isOpen: false });
        toast.success("Your Data has been successfully added.");
      })
      .catch((error) => {
        toast.error("An error occurred, please try again");
      });
  };
  const onEdited = async (data) => {
    const res = await axios.put(`${endpoint}/${data.id}`, data);
    // .then((response) => {
    //   setOpenDialog({ isOpen: false });
    //   toast.success("Your Data has been successfully edited");
    // })
    // .catch((error) => {
    //   toast.error("error");
    // });
    if (res.status === 200) {
      setOpenDialog({ isOpen: false });
      toast.success("Your Data has been successfully edited.");
    } else {
      toast.error("error");
    }
  };

  return (
    <div>
      <GridWithForm
        item={loadedData}
        onEditHandler={onEdit}
        onDeleteHandler={onDelete}
        onAddHandler={onAdd}
        submitHandler={onSubmit}
        editedHandler={onEdited}
      />
    </div>
  );
};

export default GridPage;
