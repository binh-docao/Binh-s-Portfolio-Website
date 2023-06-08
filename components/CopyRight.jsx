import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()}<br />
      </p>
    </div>
  );
};

export default CopyRight;
