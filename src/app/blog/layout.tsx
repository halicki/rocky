import BlogNavbar from "@/components/BlogNavbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BlogNavbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
