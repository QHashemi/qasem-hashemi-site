
import "./globals.css";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" data-lt-installed="true" suppressHydrationWarning={true}>
      <body >
        {children}
      </body>
    </html>
  );
}
