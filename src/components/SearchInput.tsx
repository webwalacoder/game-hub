import { Box, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "@/store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
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
