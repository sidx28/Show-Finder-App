import { HTMLAttributes, FC, memo } from "react";

type H1Props = HTMLAttributes<HTMLHeadingElement>;

const H1: FC<H1Props> = ({ children, className }) => {
  return (
    <>
      <h1 className={"text-4xl font-mono font-semibold " + className}>
        {children}
      </h1>
    </>
  );
};

H1.defaultProps = {};

export default memo(H1);
