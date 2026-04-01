import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(150deg, #0a3d6b 0%, #0e6ea8 45%, #0a9e9e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Wave stripe accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "140px",
            background: "rgba(255,255,255,0.07)",
            borderRadius: "60% 60% 0 0 / 80px 80px 0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "50% 50% 0 0 / 50px 50px 0 0",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "88px",
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              letterSpacing: "-3px",
              lineHeight: 1.05,
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Surfing With Rocky
          </div>
          <div
            style={{
              width: "120px",
              height: "4px",
              background: "rgba(255,255,255,0.5)",
              margin: "28px auto 28px",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              fontSize: "38px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
              letterSpacing: "1px",
            }}
          >
            Surf Lessons · Batu Bolong · Canggu · Bali
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
