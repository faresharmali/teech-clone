import { Button } from "@chakra-ui/react";

const VideoSection = () => {
  return (
    <article className="w-full h-[100vh] relative">
      <div className="absolute w-full h-full bg-[#00000040] flex justify-center items-center p-4 flex-col gap-4">
        <h1 className="text-white text-3xl text-center">
          Learn things you're really interested in - together with the world's
          best mentors
        </h1>
        <Button minW={300} fontSize={".9rem"} bg={'#9C948B'}>
        Register at teech
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
