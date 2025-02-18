import React from "react";

const UseMemoCounter = ({ value, children, onClick }) => {
  console.log("Render", children);
  return (
    <div>
      <button onClick={onClick}>{children}</button>
      {children}:{value}
    </div>
  );
};

export default React.memo(UseMemoCounter);
