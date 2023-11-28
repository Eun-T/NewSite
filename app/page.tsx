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

export default function Home() {
  return (
    <main className="overflow-hidden">
      <MainMenu />
      {/* <Merit /> */}
      <SmartPlace />
      <SmartOtherService />
      <PowerLink />
      <>
        <Blog />
        <BlogSlider />
        <BlogProcess />
      </>
      <LineBar />
      <Sns />
      <Website />
      <Youtube />
    </main>
  );
}
