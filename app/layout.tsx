import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
