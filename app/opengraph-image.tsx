import { ImageResponse } from "next/og";

export const alt = "Lolaxon Xayrullayeva | Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #020617 0%, #2e1065 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 34, color: "#c4b5fd" }}>Portfolio</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 16 }}>
          Lolaxon Xayrullayeva
        </div>
        <div style={{ fontSize: 44, color: "#f472b6", marginTop: 16 }}>
          Frontend Developer
        </div>
        <div style={{ fontSize: 30, color: "#cbd5e1", marginTop: 32 }}>
          React · Next.js · TypeScript · Tailwind CSS
        </div>
      </div>
    ),
    { ...size }
  );
}