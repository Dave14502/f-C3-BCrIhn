import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDismiss = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-foreground">
            Wir verwenden Cookies, um dein Erlebnis zu verbessern. Durch die weitere Nutzung dieser Website akzeptierst du unsere{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Cookie-Richtlinie
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDismiss}
            className="flex items-center gap-1"
          >
            <X size={16} />
            <span>Ablehnen</span>
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-primary hover:bg-primary/90"
          >
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
