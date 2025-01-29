import { type PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="stylesheet"
          href={asset("animate.css")}
        />
        <link rel="stylesheet" href={asset("styles.css")} />

        {/* Add this script to handle initial dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const setting = localStorage.getItem('colorMode') || 'os';
              if (setting === 'dark' || (prefersDark && setting !== 'light')) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })()
          `,
          }}
        />
      </Head>
      <body class="relative min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50">
        <Component />
      </body>
    </html>
  );
}
