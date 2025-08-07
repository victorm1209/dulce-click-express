import { Heart, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/40 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-lg mb-3 gradient-primary bg-clip-text text-transparent">
              Helados Ya
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Los mejores helados, snacks y dulces para endulzar tu día. 
              Calidad y sabor en cada producto.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-red-500" />
              Hecho con amor en Venezuela
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Contacto</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +58 412-3988176
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Caracas, Venezuela
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Horarios</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Lun - Viernes: 7:00 AM - 11:00 PM
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Sáb - Dom: 8:00 AM - 11:00 PM
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Helados Ya. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;