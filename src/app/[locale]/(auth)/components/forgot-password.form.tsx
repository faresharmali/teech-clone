"use client";
import Input from "@/components/ui/form/input";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

import Link from "next/link";
import LanguagePicker from "@/components/ui/form/language-picker";
import { useTranslations } from "next-intl";

const ForgotPasswordForm = () => {
  const t = useTranslations("Auth");

  return (
    <article className="w-full h-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-5 w-[90%] lg:w-[50%]">
        <Image alt={"logo"} src={Logo} width={120} />
        <h1 className="text-lg text-center text-white">
          {t("resetPasswordHere")}
        </h1>

        <Input className="w-full" label="Email" type="email" />

        <Button
          mt={2}
          minW={300}
          fontSize={".9rem"}
          bg={"#443EFA"}
          color={"#fff"}
          _hover={{ bg: "#443EFA" }}

        >
          {t("sendResetLink")}
        </Button>

        <h1 className="text-sm text-[#7B7A7D]">
         {t('havingTrouble')}{" "}
          <Link className="underline" href={"/login"}>
           {t('contactSupport')}
          </Link>
        </h1>
        <LanguagePicker />

      </div>
    </article>
  );
};

export default ForgotPasswordForm;
