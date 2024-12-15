import Footer from "./components/Footer/page";
import HeroSection from "./components/heroSection/page";
import MealPlanner from "./components/MealPlanner/page";
import Navbar from "./components/navbar/page";
import RecipeSection from "./components/RecipeSection/page";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <RecipeSection></RecipeSection>
      <MealPlanner></MealPlanner>
      <Footer></Footer>
    </div>
  );
}
