import Footer from "../components/footer";
import Header from "../components/header";
import Provider from "@/themes/provider";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter"
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body >
        <AppRouterCacheProvider>
          <Provider>
            <Header />
            <main className="p-5 max-w-3xl min-h-screen my-0 mx-auto">{children}</main>
            <Footer />
          </Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
