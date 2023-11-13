import { useEffect } from "react";
import { Navbar, Hero } from "./components";
import { robot } from "./assets";


function App() {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scrolling on unmount
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute z-[-1] w-full h-full top-0 left-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${robot})` }}
      />

      <div className="absolute z-0 w-full h-full top-0 left-0 pink__gradient" />

      <div className="relative z-[5]">
        <Navbar />

        <div className="bg-transparent">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;