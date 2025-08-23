"use client"
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-lt-installed="true" suppressHydrationWarning={true}>
      <body style={{ position: "relative", minHeight: "100vh" }}>
        {/* 🔥 Overlay Coming Soon */}
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-25deg)",
            fontSize: "clamp(2rem, 10vw, 6rem)", // responsive font size
            fontWeight: "900",
            color: "rgba(255, 255, 255, 0.48)", // softer watermark look
            whiteSpace: "nowrap",
            pointerEvents: "none", // don’t block clicks
            userSelect: "none",
            letterSpacing: "0.5rem",
            zIndex: 9999,
            animation: "pulse 3s infinite ease-in-out",
          }}
        >
          COMING SOON
        </div>

        {children}

        {/* CSS animation */}
        <style jsx global>{`
          @keyframes pulse {
            0% {
              opacity: 0.15;
            }
            50% {
              opacity: 0.3;
            }
            100% {
              opacity: 0.15;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
