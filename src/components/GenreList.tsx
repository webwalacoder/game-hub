import useGenres, { type Genre } from "@/hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  Spinner,
  Tooltip,
} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List.Root listStyle="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Tooltip.Root openDelay={800} closeDelay={200}>
              <Tooltip.Trigger asChild>
                <Button
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  variant="plain"
                  _hover={{ textDecoration: "underline" }}
                  padding="0"
                >
                  {genre.name.length >= 12
                    ? genre.name.slice(0, 12) + "..."
                    : genre.name}
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content>{genre.name}</Tooltip.Content>
            </Tooltip.Root>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};
export default GenreList;
