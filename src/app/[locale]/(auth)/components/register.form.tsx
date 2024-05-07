"use client";
import Input from "@/components/ui/form/input";
import { Box, Button, Checkbox, Flex, Grid } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import ReCAPTCHA from "react-google-recaptcha";
import LanguagePicker from "@/components/ui/form/language-picker";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useRouter } from "@/lib/i18n";

const RegistrationForm = () => {
  const t = useTranslations("Auth");
  const locale = usePathname().slice(1, 3);
  const router = useRouter();
  return (
    <article className="w-full h-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-5 max-w-[90%] lg:max-w-[50%]">
        <Image alt={"logo"} src={Logo} width={120} />
        <h1 className="text-2xl text-center text-white">{t("welcome")}</h1>
        <Grid
          gridTemplateColumns={{ sm: "1fr", lg: "1fr 1fr" }}
          gap={4}
          w={"full"}
        >
          <Input label={t("inputs.firstName")} type="text" />
          <Input label={t("inputs.lastName")} type="text" />
          <Input
            className="sm:col-span-1 lg:col-span-2"
            label={t("inputs.email")}
            type="email"
          />
          <Input label={t("inputs.password")} type="password" />
          <Input label={t("inputs.confirmPassword")} type="password" />
        </Grid>
        <Checkbox alignItems={"start"} size={"lg"}>
          <h1 className="text-sm text-[#7B7A7D]">
            {t("inputs.termsAndConditions")}
          </h1>
        </Checkbox>

        <Button
          mt={2}
          minW={300}
          fontSize={".9rem"}
          bg={"#443EFA"}
          color={"#fff"}
          onClick={() => {
            router.push("/room", { locale: locale });
          }}
        >
          {t("register")}
        </Button>
        <Flex direction={"column"} alignItems={"center"} gap={1}>
          <h1 className="text-sm text-[#7B7A7D]">
            {t("alreadyRegistered")}{" "}
            <Link locale={locale} className="underline" href={"/login"}>
              {t("login")}
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

export default RegistrationForm;
