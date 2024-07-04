import React from "react";
import classNames from "classnames";

interface DividerProps extends React.ComponentProps<"span"> {
    h?: number,
    shade?: string
}

export function Divider(props: DividerProps) {
  const { children, h=1, shade=200, className, ...rest } = props;

  const c = classNames(`w-full flex h-[${h}px] bg-gray-${shade}`, className);

  return (
    <span
      className={c}
      {...rest}
    />
  );
}
