import { Grid } from "@chakra-ui/react";
import VideoSection from "./components/video.section";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function Layout({ children }: { children: React.ReactNode }) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <section className="bg-black w-full h-[100vh] relative">
        <Grid gridTemplateColumns={"1fr 1fr"}>
          {children}
          <VideoSection />
        </Grid>
      </section>
    </NextIntlClientProvider>
  );
}
