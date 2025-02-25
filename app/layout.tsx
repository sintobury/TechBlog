import Footer from "../components/footer";
import Header from "../components/header";
import Provider from "@/themes/provider";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body >
          <Provider>
            <Header />
            <main className="p-5 max-w-3xl min-h-screen my-0 mx-auto">{children}</main>
            <Footer />
          </Provider>
      </body>
    </html>
  );
}
