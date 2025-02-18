import { InventoryToolbar } from '@/partials/InventoryToolbar';
import { InventoryList } from '@/partials/InventoryList';
import { PageWrapper } from '@/partials/PageWrapper';

export default function Page() {
  return (
    <PageWrapper>
      <InventoryToolbar />
      <InventoryList />
    </PageWrapper>
  );
}
