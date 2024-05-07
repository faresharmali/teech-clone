import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Avatar } from "@chakra-ui/react";
const Header = () => {
  return (
    <div className="w-full h-20 bg-[#191D21] px-4 flex items-center justify-between">
      <Image alt="Logo" src={Logo} width={100} />
      <Avatar name="Fares Harmali" color={"#fff"} size={"md"} />
    </div>
  );
};

export default Header;
