import { Outlet } from "react-router";
import { Button } from "../components/ui/button";
import { FooterSection } from "../screens/Desktop/sections/FooterSection/FooterSection";
import { DeviceCompatibilitySection } from "../screens/Desktop/sections/DeviceCompatibilitySection/DeviceCompatibilitySection";


const Layout = () => {
    const navigationItems = [
  { label: "Features", active: true },
  { label: "How it works", active: false },
  { label: "Premium", active: false },
];
    return (
        <div>
                  <div className="absolute top-[180px] left-[849px] w-[599px] h-[723px] rounded-[130px] blur-[225px] " />

      <header className="flex  h-[68px] items-center justify-center gap-2.5 px-6 py-2.5 bg-[linear-gradient(315deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(149deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(254,203,44,1)_100%)]">
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-transparent text-xl text-center tracking-[-0.40px] leading-[26px] whitespace-nowrap">
          <span className="text-white tracking-[-0.08px]">
            Clinical Strength Capsules &amp; Daily Dose Gummies coming soon -{" "}
          </span>
          <span className="text-[#002642] tracking-[-0.08px]">
            Stay tuned to unlock 1 month of premium, with purchase.
          </span>
        </div>
      </header>

<nav className="flex items-center justify-between h-28 px-12 bg-[#002642] shadow-[0px_0px_12px_2px_#0092de4a] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
  {/* Logo */}
  <img
    className="w-32 h-32"
    alt="Logo round"
    src="/logo.png"
  />

  {/* Navigation Items */}
  <div className="flex items-center gap-3">
    {navigationItems.map((item, index) => (
      <Button
        key={index}
        variant="ghost"
        className="w-[141px] h-[40px] bg-[#008ae133] rounded-[30px] text-white font-poppins font-semibold text-base tracking-[-0.32px] leading-[20.8px] hover:bg-[#008ae150]"
      >
        {item.label}
      </Button>
    ))}
      <Button className="w-[141px] h-10 rounded-[30px] bg-[linear-gradient(130deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(254,203,44,1)_100%)] text-white font-poppins font-semibold text-base tracking-[-0.32px] leading-[20.8px] hover:opacity-90">
    Get the Apps
  </Button>
  </div>

  {/* Call-to-Action Button */}

</nav>

 <Outlet />
<div>

 

      <DeviceCompatibilitySection />
</div>
 
        </div>
    );
};

export default Layout;