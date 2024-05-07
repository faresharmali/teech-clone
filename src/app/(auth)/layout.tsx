import { Grid } from "@chakra-ui/react";
import VideoSection from "./components/video.section";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-black w-full h-[100vh] relative">
      <Grid gridTemplateColumns={"1fr 1fr"}>
      {children}
        <VideoSection />
      </Grid>
    </section>
  );
}
