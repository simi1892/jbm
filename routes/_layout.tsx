import { PageProps } from "$fresh/server.ts";
import Footer from "../components/footer.tsx";
import { State } from "../routes/_middleware.tsx";

export default function LayoutPage(props: PageProps<null, State>) {
  return (
    <html lang={props.state.lang}>
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
