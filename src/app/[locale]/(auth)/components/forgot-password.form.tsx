"use client";
import Input from "@/components/ui/form/input";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

import Link from "next/link";
import LanguagePicker from "@/components/ui/form/language-picker";

const ForgotPasswordForm = () => {
  return (
    <article className="w-full h-full flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col gap-5 w-[50%]">
        <Image alt={"logo"} src={Logo} width={120} />
        <h1 className="text-lg text-center text-white">
          Forgotten your password? You can reset it here.!
        </h1>

        <Input className="w-full" label="Email" type="email" />

        <Button
          mt={2}
          minW={300}
          fontSize={".9rem"}
          bg={"#443EFA"}
          color={"#fff"}
        >
          Send reset link
        </Button>

        <h1 className="text-sm text-[#7B7A7D]">
          Having issues?{" "}
          <Link className="underline" href={"/login"}>
            contact support
          </Link>
        </h1>
        <LanguagePicker />

      </div>
    </article>
  );
};

export default ForgotPasswordForm;
