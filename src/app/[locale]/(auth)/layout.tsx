import { Grid } from "@chakra-ui/react";
import VideoSection from "./components/video.section";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function Layout({ children }: { children: React.ReactNode }) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <section className="bg-black w-full h-[100vh] relative">
        <Grid gridTemplateColumns={{sm:"1fr",lg:"1fr 1fr"}}>
          <div className="flex justify-center items-center h-[100vh]">
            
          {children}
          </div>
          <VideoSection />
        </Grid>
      </section>
    </NextIntlClientProvider>
  );
}
