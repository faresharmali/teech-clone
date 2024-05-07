"use client";
import Input from "@/components/ui/form/input";
import { Box, Button, Checkbox, Flex, Grid } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import ReCAPTCHA from "react-google-recaptcha";
import LanguagePicker from "@/components/ui/form/language-picker";
import Link from "next/link";

const RegistrationForm = () => {
  return (
    <article className="w-full h-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-5 max-w-[50%]">
        <Image alt={"logo"} src={Logo} width={120} />
        <h1 className="text-2xl text-center text-white">Welcome to teech!</h1>
        <Grid gridTemplateColumns={"1fr 1fr"} gap={4}>
          <Input label="First name" type="text" />
          <Input label="Last name" type="text" />
          <Input className="col-span-2" label="Your email" type="email" />
          <Input label="Password" type="password" />
          <Input label="Password confirmation" type="password" />
        </Grid>
        <Checkbox alignItems={"start"} size={"lg"}>
          <h1 className="text-sm text-[#7B7A7D]">
            hereby confirm the terms and conditions of teech. I have taken note
            of the Privacy Policy.
          </h1>
        </Checkbox>
        {/* <ReCAPTCHA
          sitekey="6LfjP9QpAAAAAMZEYW-GdPGlagl1dTnrrlCItE8x"
          security="6LfjP9QpAAAAAHnQEJ-WRFUCXmAqMIkO6hLkafT9"
          onChange={(value: any) => console.log("Captcha value:", value)}
        /> */}
        <Button
          mt={2}
          minW={300}
          fontSize={".9rem"}
          bg={"#443EFA"}
          color={"#fff"}
        >
          Register
        </Button>
        <LanguagePicker />
        <Flex direction={"column"} alignItems={"center"} gap={1}>
          <h1 className="text-sm text-[#7B7A7D]">
            Already have an account?{" "}
            <Link className="underline" href={"/login"}>
              login now
            </Link>
          </h1>
          <h1 className="text-sm text-[#7B7A7D]">
            Having issues?{" "}
            <Link className="underline" href={"/login"}>
              contact support
            </Link>
          </h1>
        </Flex>
      </div>
    </article>
  );
};

export default RegistrationForm;
