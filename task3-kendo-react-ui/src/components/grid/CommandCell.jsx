import React from "react";
import Button from "../buttons/Button";

const CommandCell = ({ editButton, deleteButton }) => {
  // console.log(editButton);
  return (
    <div>
      <Button label={editButton.label} onClick={editButton.onEdit} />
      <Button
        label={deleteButton.label}
        onClick={deleteButton.onDelete}
        style={{ left: 20 }}
      />
    </div>
  );
};

export default CommandCell;
