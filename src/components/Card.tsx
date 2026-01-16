import { Box, Text } from "@radix-ui/themes";
import type { PropsWithChildren } from "react";

type CardProps = {
  title: string;
} & PropsWithChildren;

export default function Card({ title, children }: CardProps) {
  return (
    <Box className="w-fit h-70 p-2 rounded-3xl flex flex-col gap-1 justify-start shadow-xl bg-white">
      <Box className="relative z-10 w-70 h-50 flex justify-center items-center rounded-2xl bg-(--gray-3)">
        {children}
      </Box>
      <Text weight="bold" size="2" align="left" as="p" className="text-gray-600 py-0.5">
        {title}
      </Text>
    </Box>
  );
}
