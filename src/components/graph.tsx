import React from "react";

interface Props {
  className?: string;
}

export const Graph: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <svg>
        <canvas></canvas>
      </svg>
    </div>
  );
};
