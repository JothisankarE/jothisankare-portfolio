import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 right-0 z-50 p-6">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="glow-hover bg-card/80 backdrop-blur-sm border-primary/20"
      >
        {isDark ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </header>
  );
};

export default Header;