import { useRouter } from "next/router";
import * as React from "react";

export interface IDocsProps {}

export default function Docs(props: IDocsProps) {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return <div>This is params</div>;
}
