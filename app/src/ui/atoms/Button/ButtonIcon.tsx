import React from "react";

interface ButtonIconProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <button
      type="button"
      className={`p-1 rounded-lg hover:bg-gray-200 ${className ?? className}`}
      {...rest}
    >
      {props.icon}
    </button>
  );
};
