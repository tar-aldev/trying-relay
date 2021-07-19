import { useMemo } from "react";

const ShownPaginationCount = ({ showing, total, position }) => {
  const styles = useMemo(() => {
    const calculatedStyles = {
      position: "sticky",
      zIndex: 10,
      boxShadow:
        position === "top"
          ? "0 .5rem 1rem rgb(0 0 0 / 15%)"
          : "0 -.5rem 1rem rgb(0 0 0 / 15%)",
      marginBottom: position === "top" ? "1rem" : 0,
    };

    position === "top"
      ? (calculatedStyles.top = 0)
      : (calculatedStyles.bottom = 0);
    return calculatedStyles;
  }, [position]);

  return (
    <div style={styles} className="p-2 py-4 bg-white mx-n2">
      <p className="text-center">
        Showing <span className="font-weight-bold">{showing}</span> of{" "}
        <span className="font-weight-bold">{total}</span> items
      </p>
    </div>
  );
};

export default ShownPaginationCount;
