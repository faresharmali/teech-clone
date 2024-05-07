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
import { usePathname } from "next/navigation";
import { useRouter } from "@/lib/i18n";

enum Local {
  DEUTSCH = "de",
  ENGLISH = "en",
}

const LanguagePicker = () => {
  const pathname = usePathname();
  const [selectedLocal, setSelectedLocal] = useState<Local>(
    pathname.startsWith("/en") ? Local.ENGLISH : Local.DEUTSCH
  );
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
  const router = useRouter();

  const hanleLanguageChange = (local: Local) => {
    setSelectedLocal(local);
    const newPathName = pathname.replace("/en", "").replace("/de", "");
    router.push(newPathName, { locale: local });
  };
  return (
    <Menu>
      <MenuButton bg={"#7B7A7D"} w={"rem"} as={Button}>
        <Flex w={"full"} justify={"center"} gap={2}>
          <Image
            alt="german flag"
            width={25}
            src={language[selectedLocal].img}
          />
          <h1 className="text-sm">{language[selectedLocal].text}</h1>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem gap={2} onClick={() => hanleLanguageChange(Local.DEUTSCH)}>
          <Image alt="german flag" width={25} src={GermanFlag} />
          Deutsch
        </MenuItem>
        <MenuItem onClick={() => hanleLanguageChange(Local.ENGLISH)} gap={2}>
          <Image alt="english flag" width={25} src={EnglishFlag} />
          English
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguagePicker;
