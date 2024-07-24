import HomeFirstSection from "./components/HomeFirstSection";
import HomeHeader from "./components/HomeHeader"
import HomeSecondSection from "./components/HomeSecondSection";


export default function App() {
  return (
    <>
      <HomeHeader />
        <HomeFirstSection />
          <HomeSecondSection />
    </>
  );
}
