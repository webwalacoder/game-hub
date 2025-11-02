import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import {
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";

const HomePage = () => {
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show when={showAside}>
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" padding={3}>
        <GameHeading />
        <HStack gap={5} marginBottom={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
export default HomePage;
