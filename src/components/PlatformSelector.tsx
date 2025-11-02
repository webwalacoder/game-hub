import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button, HStack, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useCustomButtonTheme from "./ui/ui-hooks/useCustomButtonTheme";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = data.results.find(
    (p) => p.id === selectedPlatformId
  );

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
              onClick={() => setSelectedPlatformId(platform.id)}
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
