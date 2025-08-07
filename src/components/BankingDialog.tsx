import { Phone, Building2, CreditCard, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const BankingDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
        >
          <CreditCard className="h-5 w-5 mr-2" />
          Info de Pago
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <CreditCard className="h-5 w-5" />
            Información de Pago
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
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
                <p className="text-sm text-muted-foreground">(0134) Banesco</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-3 mb-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <p className="font-medium">Cédula de identidad</p>
            </div>
            {/* <p className="text-lg font-mono">0102-1234-5678-9012-3456</p> */}
            <p className="text-sm text-muted-foreground mt-1">Giovany Díaz</p>
            <p className="text-sm text-muted-foreground">V-5.590.413</p>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-950 dark:border-amber-800">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
            <div>
              <p className="font-medium text-amber-800 dark:text-amber-200">
                Importante
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Los pagos se deben realizar según la tasa oficial del Dólar BCV.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BankingDialog;