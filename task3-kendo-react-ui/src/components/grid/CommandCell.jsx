import React from "react";
import Button from "../buttons/Button";

const CommandCell = ({ editButton, deleteButton }) => {
  return (
    <div>
      <Button label={editButton.label} onClick={editButton.onEdit} />
      <Button label={deleteButton.label} onClick={deleteButton.onDelete} />
    </div>
  );
};

export default CommandCell;
