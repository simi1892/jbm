import { LayoutProps } from "$fresh/server.ts";
import Footer from "../components/footer.tsx";

export default function LayoutPage(props: LayoutProps<null, State>) {
  return (
    <html lang="en">
      <head>
        <title>Jana Bachl - Musical Actress</title>
        <meta
          name="description"
          content="Jana Bachl - Musical Actress - Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <props.Component />
      <Footer />
    </html>
  );
}
