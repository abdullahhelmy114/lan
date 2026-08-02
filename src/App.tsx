import { useState } from 'react';
import { RegistrationForm } from './components/landing/RegistrationForm';
import type { Lang } from './lib/i18n';

export default function App() {
  const [selectedLang, setSelectedLang] = useState<Lang>('ar');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-8 text-center">
        <h1 className="font-serif text-3xl text-primary">
          روح القدس - رفيق السفر
        </h1>
        <p className="mt-2 text-muted-foreground">
          بإشراف الدكتورة جيهان علي زياد
        </p>
      </header>
      <main>
        <RegistrationForm
          lang={selectedLang}
          selected={selectedLang}
          setSelected={setSelectedLang}
        />
      </main>
    </div>
  );
}