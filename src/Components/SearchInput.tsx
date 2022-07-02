import { FC, InputHTMLAttributes, memo } from "react";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<SearchInputProps> = ({ ...props }) => {
  return (
    <>
      <input
        className="border-2 rounded-md p-2 border-gray-500 w-full"
        {...props}
      />
    </>
  );
};

SearchInput.defaultProps = {};

export default memo(SearchInput);
