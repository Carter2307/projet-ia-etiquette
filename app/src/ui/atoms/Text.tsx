import React from "react";

interface TextProps extends React.ComponentProps<"p"> {}

export function Text(props: TextProps) {
  const { children, className, ...rest } = props;

  return (
    <p
      className={`text-xs text-gray-700 ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </p>
  );
}
