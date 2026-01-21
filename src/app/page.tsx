'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/preview');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2B2B2B] to-[#313335]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#6897BB] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#A9B7C6]">Redirecting to component library...</p>
      </div>
    </div>
  );
}
