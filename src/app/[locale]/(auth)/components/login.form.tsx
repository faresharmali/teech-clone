"use client";
import Input from "@/components/ui/form/input";
import { Box, Button, Checkbox, Flex, Grid } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import LanguagePicker from "@/components/ui/form/language-picker";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useRouter } from "@/lib/i18n";

const LoginForm = () => {
  const t = useTranslations("Auth");
  const locale = usePathname().slice(1, 3);
  const router = useRouter();

  return (
    <article className="w-full h-full flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col gap-5  w-[90%] lg:w-[50%]">
        <Image alt={"logo"} src={Logo} width={120} />
        <h1 className="text-2xl text-center text-white">{t("welcome")}!</h1>

        <Input className="w-full" label={t("inputs.email")} type="email" />
        <Box w="full">
          <Input
            className="w-full"
            label={t("inputs.password")}
            type="password"
          />
          <h1 className="text-sm w-full mt-2 text-[#7B7A7D]">
            <Link locale={locale} href={"/forgot-password"}>
              {t("forgotPassword")}
            </Link>
          </h1>
        </Box>

        <Button
          mt={2}
          minW={300}
          fontSize={".9rem"}
          bg={"#443EFA"}
          _hover={{ bg: "#443EFA" }}
          color={"#fff"}
          onClick={() => {
            router.push("/room", { locale: locale });
          }}
        >
          {t("login")}
        </Button>

        <Flex direction={"column"} alignItems={"center"} gap={1}>
          <h1 className="text-sm text-[#7B7A7D]">
            {t("newToTeech")}{" "}
            <Link locale={locale} className="underline" href={"/register"}>
              {t("register")}
            </Link>
          </h1>
          <h1 className="text-sm text-[#7B7A7D]">
            {t("havingTrouble")}{" "}
            <Link locale={locale} className="underline" href={"/login"}>
              {t("contactSupport")}
            </Link>
          </h1>
        </Flex>
        <LanguagePicker />
      </div>
    </article>
  );
};

export default LoginForm;
