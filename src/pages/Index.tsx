import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import cookiesStack from "@/assets/cookies-stack.png";
import chefPortrait from "@/assets/chef-portrait.jpg";
import strawberryTart from "@/assets/strawberry-tart.jpg";
import honeyBun from "@/assets/honey-bun.png";
import melonBun from "@/assets/melon-bun.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content Grid */}
      <main className="px-8 py-6">
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* Sweet Treat Section - Main Large Card */}
          <div className="col-span-12 lg:col-span-8 bg-gradient-orange rounded-3xl p-8 relative overflow-hidden shadow-card">
            <div className="grid grid-cols-2 gap-8 items-center h-full">
              <div className="space-y-4">
                {/* Sparkle decoration */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-white text-2xl">✨</div>
                </div>
                
                {/* Main Title */}
                <h2 className="text-6xl lg:text-7xl font-black text-white leading-none">
                  SWEET<br />TREAT!
                </h2>
                
                {/* Price Badge */}
                <div className="inline-block">
                  <Button variant="price" className="relative">
                    <span className="text-xs">FROM</span>
                    <br />
                    <span className="text-lg font-bold">$12</span>
                  </Button>
                </div>
                
                {/* Description */}
                <p className="text-foreground text-lg mt-6">
                  Freshly crafted treats,<br />
                  made just for you
                </p>
                
                {/* Rating and Icons */}
                <div className="flex items-center justify-between mt-8">
                  <div className="text-white">
                    <span className="text-2xl font-bold">( 4.8 </span>
                    <span className="text-sm">since 1985 )</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      🍪
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      🧁
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      🍫
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Cookie Image */}
              <div className="flex justify-center items-center">
                <img 
                  src={cookiesStack} 
                  alt="Chocolate sandwich cookies"
                  className="w-80 h-80 object-contain drop-shadow-2xl transform rotate-12"
                />
              </div>
            </div>
          </div>

          {/* School Section */}
          <div className="col-span-12 lg:col-span-4 bg-gradient-blue rounded-3xl p-6 shadow-card">
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-foreground">SCHOOL</h3>
              <p className="text-foreground text-lg">Learn to bake deliciously</p>
              
              <div className="flex items-center justify-between mt-6">
                <div className="space-y-2">
                  <div className="text-white font-bold">JOIN NOW</div>
                  <div className="text-2xl">↗️</div>
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img 
                    src={chefPortrait} 
                    alt="Chef"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <Button variant="explore" className="w-full mt-4">
                EXPLORE
              </Button>
            </div>
          </div>

          {/* Top-5 Picks Section */}
          <div className="col-span-12 lg:col-span-6 bg-card rounded-3xl p-6 shadow-card">
            <h3 className="text-4xl font-black text-foreground mb-6">TOP-5<br/>PICKS</h3>
            
            <div className="space-y-4">
              <ProductCard 
                image={honeyBun}
                name="Honey Bun"
                description="Fluffy bun with sweet honey glaze"
                price="$4.99"
                imageClassName="bg-orange-200"
              />
              
              <ProductCard 
                image={melonBun}
                name="Melon Buns"
                description="Light bun with smooth melon filling"
                price="$5.50"
                imageClassName="bg-green-200"
              />
            </div>
          </div>

          {/* Everyday Section */}
          <div className="col-span-12 lg:col-span-6 bg-swirlzy-orange rounded-3xl p-6 shadow-card relative overflow-hidden">
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-foreground">EVERYDAY</h3>
              
              <div className="relative">
                <img 
                  src={strawberryTart} 
                  alt="Strawberry tart"
                  className="w-32 h-32 object-cover rounded-2xl mx-auto"
                />
                <Button variant="price" className="absolute -top-2 -right-2">
                  $10
                </Button>
                {/* Sparkle decoration */}
                <div className="absolute -bottom-2 -right-2 text-white text-2xl">✨</div>
              </div>
              
              <p className="text-foreground text-lg mt-4">
                Freshly baked, delivered daily<br />
                right to your door!
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Index;