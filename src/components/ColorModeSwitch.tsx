import { HStack, Switch, SwitchHiddenInput } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root
        colorPalette="teal"
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
      >
        <SwitchHiddenInput />
        <Switch.Control />
        <Switch.Label>Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};
export default ColorModeSwitch;
