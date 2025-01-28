import { PageProps } from "$fresh/server.ts";
import Header from "../components/header.tsx";
import Hero from "../components/hero.tsx";
import { State } from "./_middleware.tsx";

export default function Home(props: PageProps<null, State>) {
  const LINKS = [
    { name: props.state.t.titles.aboutme, href: "#about-me" },
    { name: props.state.t.titles.projects, href: "#projects" },
    { name: props.state.t.titles.contact, href: "#contact" },
  ];
  return (
    <>
      <Header active="/" left={LINKS} lang={props.state.lang} />
      <Hero></Hero>
    </>
  );
}
