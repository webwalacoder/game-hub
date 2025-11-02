import useGameQueryStore from "@/store";
import { Button, HStack, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useCustomButtonTheme from "./ui/ui-hooks/useCustomButtonTheme";

const SortSelector = () => {
  const { bg, hoverBg, color } = useCustomButtonTheme();
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button bg={bg} _hover={{ bg: hoverBg }} color={color}>
          <HStack gap="2">
            <span>Order By: {currentSortOrder?.label || "Relevance"}</span>
            <Icon as={BsChevronDown} />
          </HStack>
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          {sortOrders.map((order) => (
            <Menu.Item
              onClick={() => setSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
export default SortSelector;
