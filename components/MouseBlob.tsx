import React, { useEffect, useRef } from "react";

type Props = {};

const MouseBlob = (props: Props) => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      // blob.style.left = `${clientX}px`;
      // blob.style.top = `${clientY}px`;
      blobRef.current?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  });
  return <div className="sm:mouseblob" ref={blobRef}></div>;
};

export default MouseBlob;
