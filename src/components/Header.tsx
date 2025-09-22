import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-background">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex">
          <div className="w-6 h-6 bg-swirlzy-teal rounded-full"></div>
          <div className="w-6 h-6 bg-swirlzy-orange rounded-full -ml-2"></div>
        </div>
        <h1 className="text-2xl font-bold text-foreground">SWIRLZY</h1>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-foreground hover:text-primary transition-colors">
          Life & News
        </a>
        <a href="#" className="text-foreground hover:text-primary transition-colors">
          About
        </a>
        <a href="#" className="text-foreground hover:text-primary transition-colors">
          Store
        </a>
        <a href="#" className="text-foreground hover:text-primary transition-colors">
          Recipes
        </a>
      </nav>

      {/* Cart Button */}
      <Button variant="cart" className="relative">
        CART
        <span className="absolute -top-2 -right-2 bg-foreground text-background w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
          3
        </span>
      </Button>
    </header>
  );
};

export default Header;