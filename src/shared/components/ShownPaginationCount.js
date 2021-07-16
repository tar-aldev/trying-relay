import React from "react";

const ShownPaginationCount = ({ showing, total }) => {
  return (
    <div
      style={{
        position: "sticky",
        bottom: 0,
        zIndex: 10,
        boxShadow: "0 -.5rem 1rem rgb(0 0 0 / 15%)",
      }}
      className="p-2 bg-white mx-n2 mb-n2"
    >
      <p className="text-center mb-0">
        Showing <span className="font-weight-bold">{showing}</span> of{" "}
        <span className="font-weight-bold">{total}</span> commits
      </p>
    </div>
  );
};

export default ShownPaginationCount;
