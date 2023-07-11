import { kumbhSans } from "@/utils/fonts";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "DevJobs",
  description: "Find and apply for jobs in your area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>
        <StoreProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
