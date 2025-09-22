import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  imageClassName?: string;
}

const ProductCard = ({ image, name, description, price, imageClassName = "" }: ProductCardProps) => {
  return (
    <div className="flex items-center gap-4 p-2">
      <div className={`w-16 h-16 rounded-full bg-accent flex items-center justify-center overflow-hidden ${imageClassName}`}>
        <img 
          src={image} 
          alt={name}
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-foreground">{price}</p>
        <p className="text-xs text-muted-foreground">each</p>
      </div>
      <Button variant="add">+</Button>
    </div>
  );
};

export default ProductCard;