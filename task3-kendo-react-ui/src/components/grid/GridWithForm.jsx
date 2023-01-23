import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import Button from "../buttons/Button";
import FormDialog from "../forms/FormDialog";
import CommandCell from "./CommandCell";
// import category from "../../category.json";

const GridWithForm = ({
  item,
  onDeleteHandler,
  onEditHandler,
  onAddHandler,
  submitHandler,
  editedHandler,
}) => {
  const buttonCell = (dataItem) => {
    return (
      <CommandCell
        editButton={{
          label: "Edit",
          onEdit: () => onEditHandler(dataItem),
        }}
        deleteButton={{
          label: "Delete",
          onDelete: () => onDeleteHandler(dataItem),
        }}
      />
    );
  };

  return (
    <div>
      <GridToolbar>
        <Button label="Add new" onClick={() => onAddHandler({})} />
      </GridToolbar>
      <Grid data={item}>
        <GridColumn field="id" title="ProductID" />
        <GridColumn field="ProductName" title="ProductName" />
        <GridColumn
          field="Category.CategoryName"
          title="Category"
          data="category"
        />
        <GridColumn field="UnitPrice" title="UnitPrice" />
        <GridColumn field="UnitsInStock" title="InStock" />

        <GridColumn cell={buttonCell} />
      </Grid>
      <FormDialog submitHandler={submitHandler} editedHandler={editedHandler} />
    </div>
  );
};

export default GridWithForm;
