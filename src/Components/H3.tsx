import { FC, HTMLAttributes, memo } from "react";

type H3Props = HTMLAttributes<HTMLHeadingElement>;

const H3: FC<H3Props> = ({ children }) => {
  return (
    <>
      <h3 className="text-xl text-gray-900 font-mono font-bold">{children}</h3>
    </>
  );
};

H3.defaultProps = {};

export default memo(H3);
