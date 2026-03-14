import { ImageResponse } from "next/og";

export const alt = "OpenClaw Operator by Versatly";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #121416 0%, #1f2937 55%, #f26430 100%)",
          color: "white",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "1px",
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          Versatly
        </div>
        <div
          style={{
            fontSize: 68,
            lineHeight: 1.1,
            marginTop: 18,
            fontWeight: 700,
            maxWidth: "900px",
          }}
        >
          OpenClaw Operator
        </div>
        <div
          style={{
            fontSize: 38,
            lineHeight: 1.25,
            marginTop: 18,
            maxWidth: "980px",
            opacity: 0.9,
          }}
        >
          AI Agent Deployment for Miami &amp; South Florida Businesses
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
