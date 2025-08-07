import { Phone, Building2, CreditCard, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BankingInfo = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Información de Pago</h2>
          <p className="text-muted-foreground">
            Datos bancarios para completar tu compra
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card border-border/50">
            <CardHeader className="text-center pb-6">
              <CardTitle className="flex items-center justify-center gap-2 text-xl">
                <CreditCard className="h-5 w-5" />
                Datos Bancarios
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">+58 412-3988176</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Building2 className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Banco</p>
                    <p className="text-sm text-muted-foreground">Banco de Venezuela</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <p className="font-medium">Número de Cuenta</p>
                </div>
                <p className="text-lg font-mono">0102-1234-5678-9012-3456</p>
                <p className="text-sm text-muted-foreground mt-1">Giovany Díaz</p>
                <p className="text-sm text-muted-foreground">V-5.590.41</p>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-950 dark:border-amber-800">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-800 dark:text-amber-200">
                    Importante
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Los pagos se deben realizar según la tasa oficial del BCV.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BankingInfo;