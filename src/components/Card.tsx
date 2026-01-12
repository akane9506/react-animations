import { Box, Text } from "@radix-ui/themes";
import type { PropsWithChildren } from "react";

type CardProps = {
  title: string;
} & PropsWithChildren;

export default function Card({ title, children }: CardProps) {
  return (
    <Box className="w-fit p-0.5 rounded-2xl flex flex-col gap-1 justify-between bg-linear-to-b to-(--accent-9) shadow-xs">
      <Box
        className="relative z-10 w-70 h-70 flex justify-center items-center rounded-2xl bg-(--color-background) bg-[radial-gradient(circle,var(--gray-4)_1px,transparent_1px)] 
bg-size-[12px_12px] "
      >
        {children}
      </Box>
      {/* <Box className="relative h-12 -z-10 bg-(--accent-9) -translate-y-3 rounded-b-2xl flex items-end justify-center pb-2"> */}
      <Text
        weight="bold"
        size="2"
        align="center"
        as="p"
        className="text-(--accent-1) py-0.5"
      >
        {title}
      </Text>
      {/* </Box> */}
    </Box>
  );
}
