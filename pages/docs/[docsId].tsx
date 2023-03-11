import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

export interface IDocsProps {}

export default function Docs(props: IDocsProps) {
  return <div>This is docs param</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { docsId: "Static-Routing" },
      },
      {
        params: { docsId: "2" },
      },
      {
        params: { docsId: "3" },
      },
    ],
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // must be async

  return {
    props: {
      post: "",
    },
  };
};
