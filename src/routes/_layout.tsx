import { createFileRoute, Outlet } from "@tanstack/react-router";
import Flex from "@/components/ui/Flex";
import Footer from "../components/Footer";

import Header from "../components/Header";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <Flex $height="100dvh" $flexDirection="column" $width="100%">
      <Header />
      <Flex $flexDirection="column" $flexGrow="1" $width="100%">
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  ),
});
