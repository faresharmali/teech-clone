import { Button } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const VideoSection = () => {
  const t = useTranslations("Auth");

  return (
    <article className="w-full h-[100vh] relative">
      <div className="absolute w-full h-full bg-[#00000040] flex justify-center items-center p-4 flex-col gap-4">
        <h1 className="text-white text-4xl text-center max-w-[60%] mb-8">
         {t("description")}
        </h1>
        <Button minW={250} fontSize={".9rem"} bg={'#9C948B'}>
       {t("register")}
      </Button>
      </div>

      <video
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
        id="loginRegisterVid"
        src="https://cdn.homeskool.de/teech/login-register/loginregisterclip.mp4"
      />
     
    </article>
  );
};

export default VideoSection;
