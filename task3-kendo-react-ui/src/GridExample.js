import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useState } from "react";
import products from "./Products.json";
import { process } from "@progress/kendo-data-query";

const initialDataState = {
  sort: [
    {
      field: "code",
      dir: "asc", //sorts the data by the "code" field in ascending order and shows 10 items per page.
    },
  ],
  take: 10,
  skip: 0,
};

const GridExample = () => {
  const [dataState, setDataState] = useState(initialDataState);
  return (
    <Grid
      pagable={true}
      sortable={true}
      filterable={true}
      style={{ height: "400px" }}
      data={process(products, dataState)} //This function processes the data according to the current data state (e.g. sorting, filtering, and pagination
      {...dataState}
      onDataStateChange={(e) => {
        setDataState(e.dataState);
      }}
    >
      <Column field="ProductID" title="ID" width="80px" filterable={false} />
      <Column field="ProductName" title="Name" width="250px" />
      <Column field="UnitPrice" title="Price" width="150px" filter="numeric" />
      <Column
        field="UnitsInStock" //field: maps the column to the "UnitsInStock" field in data
        title="In stock"
        width="150px"
        filter="numeric"
      />
      <Column
        field="Discontinued"
        filter="boolean"
        cell={(props) => (
          <td>
            <input
              disabled={true}
              type="checkbox"
              checked={props.dataItem[props.field || ""]}
            />
          </td>
        )}
      />
    </Grid>
  );
};

export default GridExample;
