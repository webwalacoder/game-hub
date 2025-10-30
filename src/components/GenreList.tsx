import useGenres, { type Genre } from "@/hooks/useGenres";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
  Tooltip,
} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root listStyle="none">
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              />
              <Tooltip.Root openDelay={800} closeDelay={200}>
                <Tooltip.Trigger asChild>
                  <Button
                    onClick={() => onSelectGenre(genre)}
                    fontSize="lg"
                    fontWeight={
                      genre.id === selectedGenreId ? "bold" : "normal"
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
    </>
  );
};
export default GenreList;
