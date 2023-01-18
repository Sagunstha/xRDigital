import { Fragment, useState, useEffect } from "react";

import EditForm from "./EditForm";
import {
  Grid,
  GridToolbar,
  GridColumn as Column,
} from "@progress/kendo-react-grid";
// import { useNavigate } from "react-router-dom";

const EditCommandCell = (props) => {
  return (
    <td>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
        onClick={() => props.enterEdit(props.dataItem)}
      >
        Edit
      </button>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
        onClick={() => props.handleDelete(props.dataItem)}
        style={{ left: 5 }}
      >
        Delete
      </button>
    </td>
  );
};

const GridCrud = () => {
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    fetch(
      "https://kendo-grid-crud-666b0-default-rtdb.firebaseio.com/1/form.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const FormItems = [];
        for (const key in data) {
          const FormItem = {
            id: key,
            ...data[key],
          };
          FormItems.push(FormItem);
        }
        setLoadedData(FormItems);
      });
  }, []);

  const [openForm, setOpenForm] = useState(false);
  const [editItem, setEditItem] = useState({
    ProductID: 1,
  });
  // const [data, setData] = useState(loadedData);
  const enterEdit = (item) => {
    setOpenForm(true);
    setEditItem(item);
  };
  console.log(loadedData);

  const handleSubmit = (item) => {
    let newItem = true;
    let newData = loadedData.map((dataItem) => {
      if (item.ProductID === dataItem.ProductID) {
        newItem = false;
        return item;
      }
      return dataItem;
    });
    if (newItem) {
      newData.push(item);
    }
    setLoadedData(newData);
    setOpenForm(false);

    fetch(
      `https://kendo-grid-crud-666b0-default-rtdb.firebaseio.com/1/form/${item.ProductID}.json`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      }
    );
  };
  const addNew = () => {
    setOpenForm(true);
    setEditItem({});
  };

  const handleCancelEdit = () => {
    setOpenForm(false);
  };
  const MyEditCommandCell = (props) => (
    <EditCommandCell
      {...props}
      enterEdit={enterEdit}
      handleDelete={handleDelete}
    />
  );
  const handleDelete = (item) => {
    let newData = loadedData.filter((i) => i.ProductID !== item.ProductID);
    setLoadedData(newData);
  };

  return (
    <Fragment>
      <Grid style={{ height: "400px" }} data={loadedData}>
        <GridToolbar>
          <button
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            title="Add new"
            onClick={addNew}
          >
            Add new
          </button>
        </GridToolbar>

        <Column field="ProductID" title="ID" width="40px" />
        <Column field="ProductName" title="Name" width="250px" />
        <Column field="Category.CategoryName" title="CategoryName" />
        <Column field="UnitPrice" title="Price" />
        <Column field="UnitsInStock" title="In Stock" />
        <Column
          cell={(props) => (
            <MyEditCommandCell {...props} handleDelete={handleDelete} />
          )}
        />
        {/* <Column cell={MyEditCommandCell} /> */}
      </Grid>
      {openForm && (
        <EditForm
          cancelEdit={handleCancelEdit}
          onSubmit={handleSubmit}
          item={editItem}
        />
      )}
    </Fragment>
  );
};
export default GridCrud;
