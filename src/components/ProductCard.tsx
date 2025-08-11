import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const categoryColors = {
    helados: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    snacks: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    dulces: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    pasapalos: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1 border-border/50">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* <Badge className={`absolute top-3 left-3 ${categoryColors[product.category]}`}>
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Badge> */}
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 h-10">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                {product.price.toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground font-medium">REF</span>
            </div>
            
            <Button
              onClick={() => onAddToCart(product)}
              size="sm"
              className="gradient-primary border-0 hover:shadow-soft transition-all duration-200 group/btn"
            >
              <Plus className="h-4 w-4 mr-1 transition-transform group-hover/btn:rotate-90" />
              Agregar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;