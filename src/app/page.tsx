'use client';

import { useApp } from '@/context/AppContext';
import { SelectStore } from '@/components/select-store';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Page() {
  const { stores, activeStore, setStoreId } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (activeStore) {
      // Redirect to the shop page
      router.push(`/${activeStore.id}`);
    }
  }, [stores, activeStore]);

  return <SelectStore stores={stores} select={setStoreId} />;
}
