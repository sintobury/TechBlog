import Footer from "../components/footer";
import Header from "../components/header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body >
        <Header />
        <main className="p-5 max-w-3xl my-0 mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
