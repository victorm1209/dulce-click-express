import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BankingDialog from '@/components/BankingDialog';
import logo from '@/assets/logo.png';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 glassmorphism">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Dulce Express" className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                Dulce Express
              </h1>
              <p className="text-sm text-muted-foreground">
                Helados, Snacks & Más
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <BankingDialog />
            
            <Button
              onClick={onCartClick}
              variant="outline"
              size="lg"
              className="relative border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Carrito
              {cartItemsCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center gradient-primary border-0"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;