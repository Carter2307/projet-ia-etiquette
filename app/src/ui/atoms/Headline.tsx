
import React from "react";

interface HeadingProps extends React.ComponentProps<"h3"> {
  level?: number;
}

export function Heading(props: HeadingProps) {
  const { children, className, ...rest } = props;

  return (
    <h3
      className={`inline-block font-medium text-lg text-gray-700 ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </h3>
  );
}
