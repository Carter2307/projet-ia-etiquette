import React from "react";
import classNames from "classnames";

interface DividerProps extends React.ComponentProps<"span"> {
    h?: number,
    shade?: string
}

export function Divider(props: DividerProps) {
  const { children, h=2, shade=900, className, ...rest } = props;

  const c = classNames(`inline-block w-full border-solid border-gray-900`, className);

  return (
    <span
      className={c}
      style={{borderTopWidth: `${h}px`}}
      {...rest}
    ></span>
  );
}
