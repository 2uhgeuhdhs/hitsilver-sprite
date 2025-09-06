import React, { useEffect, useState } from 'react';
import { Button } from './button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './dialog';
import { Checkbox } from './checkbox';
import { Label } from './label';
import { X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookie_consent';
const COOKIE_BANNER_CLOSED = 'cookie_banner_closed';

export function CookieConsentBanner() {
  const [open, setOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const bannerClosed = localStorage.getItem(COOKIE_BANNER_CLOSED) === 'true';
    
    if (!savedConsent) {
      setOpen(true);
    } else {
      setConsent(JSON.parse(savedConsent));
      if (bannerClosed && !savedConsent) {
        setShowNotification(true);
      }
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    if (!localStorage.getItem(COOKIE_CONSENT_KEY)) {
      localStorage.setItem(COOKIE_BANNER_CLOSED, 'true');
      setShowNotification(true);
    }
  };

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setConsent(newConsent);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    localStorage.removeItem(COOKIE_BANNER_CLOSED);
    setOpen(false);
    setShowNotification(false);
    initializeAnalytics();
  };

  const handleSavePreferences = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    localStorage.removeItem(COOKIE_BANNER_CLOSED);
    setOpen(false);
    setShowNotification(false);
    if (consent.analytics) {
      initializeAnalytics();
    }
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  const handleOpenSettings = () => {
    setShowNotification(false);
    setOpen(true);
  };

  const initializeAnalytics = () => {
    // Initialize analytics scripts here
    console.log('Analytics initialized with consent:', consent);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Мы используем файлы cookie</DialogTitle>
          <DialogDescription>
            Мы используем файлы cookie для улучшения работы сайта. Вы можете настроить свои предпочтения.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="necessary"
              checked={consent.necessary}
              disabled
              className="opacity-50"
            />
            <Label htmlFor="necessary" className="flex-1">
              Необходимые
              <p className="text-sm text-muted-foreground">
                Эти файлы cookie необходимы для работы сайта
              </p>
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="analytics"
              checked={consent.analytics}
              onCheckedChange={(checked) =>
                setConsent({ ...consent, analytics: !!checked })
              }
            />
            <Label htmlFor="analytics" className="flex-1">
              Аналитика
              <p className="text-sm text-muted-foreground">
                Помогают нам улучшать сайт
              </p>
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="marketing"
              checked={consent.marketing}
              onCheckedChange={(checked) =>
                setConsent({ ...consent, marketing: !!checked })
              }
            />
            <Label htmlFor="marketing" className="flex-1">
              Маркетинг
              <p className="text-sm text-muted-foreground">
                Позволяют показывать релевантную рекламу
              </p>
            </Label>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <Button variant="outline" onClick={handleSavePreferences} className="flex-1">
            Сохранить настройки
          </Button>
          <Button onClick={handleAcceptAll} className="flex-1">
            Принять все
          </Button>
        </div>
      </DialogContent>
    </Dialog>

    {showNotification && (
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                Мы используем файлы cookie для улучшения вашего опыта. 
                <button 
                  onClick={handleOpenSettings}
                  className="ml-1 font-medium text-blue-600 hover:text-blue-500"
                >
                  Настроить
                </button>
              </p>
            </div>
            <button
              type="button"
              onClick={handleNotificationClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Закрыть</span>
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  );
}
