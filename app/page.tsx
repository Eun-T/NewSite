import MainMenu from "@/components/MainMenu";
import Merit from "@/components/Merit";
import SmartPlace from "@/components/SmartPlace";
import Blog from "@/components/Blog";
import Sns from "@/components/Sns";
import LineBar from "@/components/LineBar";
import Youtube from "@/components/Youtube";
import Website from "@/components/Website";
import SmartOtherService from "@/components/smartPlace/SmartOtherService";
import PowerLink from "@/components/PowerLink";
import BlogProcess from "@/components/blog/BlogProcess";
import BlogSlider from "@/components/blog/BlogSlider";
import SmartPrice from "@/components/smartPlace/SmartPrice";
import SmartExplain from "@/components/smartPlace/SmartExplain";
import PowerExplain from "@/components/powerLink/PowerExplain";
import PowerLink2 from "@/components/powerLink/PowerLink2";
import BlogCounting from "@/components/blog/BlogCounting";
import BlogCheck from "@/components/blog/BlogCheck";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <MainMenu />
      {/* <Merit /> */}
      <SmartPlace />
      <SmartExplain />
      <SmartPrice />
      {/* <SmartOtherService /> */}
      <LineBar />
      <PowerLink />
      <PowerExplain />
      <PowerLink2 />
      <LineBar />
      <>
        <Blog />
        <BlogSlider />
        <BlogCounting />
        <BlogCheck />
        {/* <BlogProcess /> */}
      </>
      <LineBar />
      {/* <Sns /> */}
      <Website />
      <Contact />
      <Footer />
      {/* <Youtube /> */}
    </main>
  );
}
