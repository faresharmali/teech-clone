import { Grid } from "@chakra-ui/react";
import RegistrationForm from "./components/register.form";
import VideoSection from "./components/video.section";

function Page() {
  return (
    <section className="bg-black w-full h-[100vh] relative">
      <Grid gridTemplateColumns={"1fr 1fr"}>
        <RegistrationForm />
        <VideoSection />
      </Grid>
    </section>
  );
}

export default Page;
