import { Button, HStack, Icon, Menu } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const bg = useColorModeValue("gray.100", "gray.700");
  const hoverBg = useColorModeValue("gray.200", "gray.600");
  const color = useColorModeValue("black", "white");

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button bg={bg} _hover={{ bg: hoverBg }} color={color} marginX={4}>
          <HStack gap="2">
            <span>Platform</span>
            <Icon as={BsChevronDown} />
          </HStack>
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <Menu.Item key={platform.id} value={platform.name}>
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
