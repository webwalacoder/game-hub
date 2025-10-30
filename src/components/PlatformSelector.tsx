import { Button, HStack, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms";
import type { Platform } from "@/hooks/usePlatforms";
import useCustomButtonTheme from "./ui/ui-hooks/useCustomButtonTheme";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  const { bg, hoverBg, color } = useCustomButtonTheme();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button bg={bg} _hover={{ bg: hoverBg }} color={color}>
          <HStack gap="2">
            <span>{selectedPlatform?.name || "Platform"}</span>
            <Icon as={BsChevronDown} />
          </HStack>
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          {data?.results.map((platform) => (
            <Menu.Item
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
              value={platform.name}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
