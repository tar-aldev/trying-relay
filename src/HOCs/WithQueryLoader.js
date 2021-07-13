import React, { useMemo } from "react";
import { useQueryLoader } from "react-relay";

const withQueryLoader = (Component, query) => {
  return (props) => {
    const [queryRef, loadQuery] = useQueryLoader(query);
    useMemo(() => {
      loadQuery();
    }, [loadQuery]);

    return <Component {...props} queryRef={queryRef} />;
  };
};

export default withQueryLoader;
