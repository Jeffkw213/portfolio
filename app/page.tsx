import Hero from "@/components/Hero"
import Grid from "@/components/Grid"
import { FaHome } from "react-icons/fa";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProject from "@/components/RecentProject";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col 
    overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={[{name: 'Home', link:'/', icon: <FaHome/>}]}/> */}
        <h1>Hello Portfolio</h1>
        <Hero/>
        <Grid/>
        <RecentProject/>
      </div>
    </main>
  );
}
