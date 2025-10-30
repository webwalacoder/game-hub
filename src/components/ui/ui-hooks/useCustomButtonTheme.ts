import { useColorModeValue } from "../color-mode";

const useCustomButtonTheme = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const hoverBg = useColorModeValue("gray.200", "gray.600");
  const color = useColorModeValue("black", "white");
  return { bg, hoverBg, color };
};

export default useCustomButtonTheme;
