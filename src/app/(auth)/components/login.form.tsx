"use client";
import Input from "@/components/ui/form/input";
import { Box, Button, Checkbox, Flex, Grid } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import ReCAPTCHA from "react-google-recaptcha";
import LanguagePicker from "@/components/ui/form/language-picker";
import Link from "next/link";

const LoginForm = () => {
  return (
    <article className="w-full h-full flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col gap-5 w-[50%]">
        <Image alt={"logo"} src={Logo} width={120} />
        <h1 className="text-2xl text-center text-white">Welcome to teech!</h1>

        <Input className="w-full" label="Your email" type="email" />
        <Box w="full">
          <Input className="w-full" label="Password" type="password" />
          <h1 className="text-sm w-full mt-2 text-[#7B7A7D]">
            <Link href={"/forgot-password"}>forgot password?</Link>
          </h1>
        </Box>

        <Button
          mt={2}
          minW={300}
          fontSize={".9rem"}
          bg={"#443EFA"}
          color={"#fff"}
        >
          Login
        </Button>
        <LanguagePicker />
        <Flex direction={"column"} alignItems={"center"} gap={1}>
          <h1 className="text-sm text-[#7B7A7D]">
            New to Teech?{" "}
            <Link className="underline" href={"/register"}>
              Register
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

export default LoginForm;
