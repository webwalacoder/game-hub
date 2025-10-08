import { Menu, Button, HStack, Icon } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useColorModeValue } from "./ui/color-mode";

const SortSelector = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const hoverBg = useColorModeValue("gray.200", "gray.600");
  const color = useColorModeValue("black", "white");

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button bg={bg} _hover={{ bg: hoverBg }} color={color}>
          <HStack gap="2">
            <span>Order By: Relevance</span>
            <Icon as={BsChevronDown} />
          </HStack>
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="something">Relevance</Menu.Item>
          <Menu.Item value="something1">Date added</Menu.Item>
          <Menu.Item value="something2">Name</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
export default SortSelector;
