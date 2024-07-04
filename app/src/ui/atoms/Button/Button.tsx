import React, { ReactElement } from "react";
import classNames from "classnames";

type variantTypes = "primary" | "ghost"

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: variantTypes
}

export function Button(props: ButtonProps) {
  const { children, variant="primary", className, ...rest } = props;

  const defaultStyle = "flex font-medium text-sm flex-row py-2 px-4 rounded-lg"

  const variantStyle: { [key in variantTypes]: string }  = {
    ghost: "hover:bg-indigo-100",
    primary: "text-gray-100 bg-indigo-700"
  };


  return (
    <button className={classNames(defaultStyle, variantStyle[variant])} {...rest}>
      {children}
    </button>
  );
}

type ButtonWithIconProps = {
  icon: ReactElement;
  position: "left" | "right";
} & ButtonProps;

export function ButtonWithIcon(props: ButtonWithIconProps) {
  const { icon, children, position } = props;

  if (position === "left") {
    return (
      <button type="button" className="flex flex-row items-center py-1 px-2 rounded hover:bg-gray-100">
        {icon}
        {children}
      </button>
    );
  }

  return (
    <Button className="flex flex-row items-center py-1 px-2 rounded hover:bg-gray-100">
      {children}
      {icon}
    </Button>
  );
}
