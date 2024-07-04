import React from "react";

interface ImageProps extends React.ComponentProps<"img"> {
  fill: boolean
}

export function Image(props: ImageProps) {
  const {
    src,
    children,
    className,
    height = "100",
    width = "100",
    fill=false,
    ...rest
  } = props;

  const size = {
    height: parseInt(height as string),
    width: parseInt(width as string),
  };

  return (
    <div
      className={`flex overflow-hidden ${fill ? "w-full h-full": ""}`}
      style={ !fill ? { height: size.height, width: size.width }: void 0}
    >
      <img
        src={
          src
            ? src
            : "https://www.womantowomanmentoring.org/wp-content/uploads/placeholder.jpg"
        }
        alt=""
        height={parseInt(height as any)}
        width={width as any}
        className={`object-cover h-full w-full`}
      />
    </div>
  );
}
