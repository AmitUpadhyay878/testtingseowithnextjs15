import HomeBanner from "./_components/Banner";
import { homePageContent } from "@/locale/homePageContent";


export default function Home() {
  return (
   <HomeBanner content={homePageContent?.BannerContent} />
  );
}
