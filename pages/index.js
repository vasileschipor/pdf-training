// STEP 0 - REPLACE IMPORT FROM SOLUTION TO APP
// import { FirstFlowPageWrapper } from "../app/features";
import { FirstFlowPageWrapper } from "../solution/features";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-between",
      }}
    >
      <FirstFlowPageWrapper />

      <div>
        <iframe id="pdf-iframe" src="" width={650} height={1000} />
      </div>
    </div>
  );
}
