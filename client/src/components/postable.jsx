import React from "react";

const Postable = (props) => {
  let { userId, id, title, body } = props;
  return (
    <div>
      <tr>
        <td>{userId}</td>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
      </tr>
    </div>
  );
};

export default Postable;
