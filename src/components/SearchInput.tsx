import { Box, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <Box position="relative">
        {/* Search Icon */}
        <Box
          position="absolute"
          left="10px"
          top="50%"
          transform="translateY(-50%)"
          pointerEvents="none"
        >
          <BsSearch color="gray" />
        </Box>

        {/* Input Field */}
        <Input
          ref={ref}
          pl="35px" // padding to avoid overlap with icon
          borderRadius="full"
          placeholder="Search games..."
          variant="outline"
        />
      </Box>
    </form>
  );
};

export default SearchInput;
