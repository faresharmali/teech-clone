"use client";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Image from "next/image";
import GermanFlag from "@/assets/images/german.svg";
import EnglishFlag from "@/assets/images/english.svg";
import { useState } from "react";

enum Local {
  DEUTSCH = "de",
  ENGLISH = "en",
}
const LanguagePicker = () => {
  const [selectedLocal, setSelectedLocal] = useState<Local>(Local.DEUTSCH);
  const language = {
    [Local.DEUTSCH]: {
      img: GermanFlag,
      text: "Deutsch",
    },
    [Local.ENGLISH]: {
      img: EnglishFlag,
      text: "English",
    },
  };
  return (
    <Menu>
      <MenuButton bg={"#7B7A7D"} w={48} as={Button}>
        <Flex w={"full"} justify={"center"} gap={2}>
          <Image
            alt="german flag"
            width={25}
            src={language[selectedLocal].img}
          />
          <h1 className="text-sm">{language[selectedLocal].text}</h1>
        </Flex>
      </MenuButton>
      <MenuList maxW={48}>
        <MenuItem gap={2} onClick={() => setSelectedLocal(Local.DEUTSCH)}>
          <Image alt="german flag" width={25} src={GermanFlag} />
          Deutsch
        </MenuItem>
        <MenuItem onClick={() => setSelectedLocal(Local.ENGLISH)} gap={2}>
          <Image alt="english flag" width={25} src={EnglishFlag} />
          English
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguagePicker;
