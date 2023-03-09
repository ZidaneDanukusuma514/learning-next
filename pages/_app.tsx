import Sidebar from "@/components/Sidebar/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Sidebar title="Learn Docs" />
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
