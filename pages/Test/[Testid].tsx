import { useRouter } from "next/router";
import * as React from "react";

export interface ITestDetailProps {}

function TestDetail(props: ITestDetailProps) {
  const router = useRouter();
  const testId = router.query.Testid;
  return <div>Test Detail {testId}</div>;
}
export default TestDetail;
