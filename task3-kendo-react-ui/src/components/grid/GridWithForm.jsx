import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import React from "react";
import Button from "../buttons/Button";
import FormDialog from "../forms/FormDialog";
import CommandCell from "./CommandCell";

const GridWithForm = ({
  setOpenDialog,
  item,
  onDeleteHandler,
  onEditHandler,
  openDialog,
  onAddHandler,
}) => {
  const buttonCell = (data) => {
    return (
      <CommandCell
        editButton={{
          label: "Edit",
          onEdit: onEditHandler,
        }}
        deleteButton={{
          label: "Delete",
          onDelete: onDeleteHandler,
        }}
      />
    );
  };

  return (
    <div>
      <GridToolbar>
        <Button label="Add new" onClick={onAddHandler} />
      </GridToolbar>
      <Grid data={item}>
        <GridColumn field="ProductID" title="ProductID" />
        <GridColumn field="ProductName" title="ProductName" />
        <GridColumn field="Category.CategoryName" title="CategoryName" />
        <GridColumn cell={buttonCell} />
      </Grid>
      <FormDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
};

export default GridWithForm;
