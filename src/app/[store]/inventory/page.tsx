import { Toolbar } from "@/components/toolbar";
import InventoryList from "@/partials/InventoryList";
import { PageWrapper } from "@/partials/PageWrapper";

export default function Page() {
  return (
        <PageWrapper>
          <Toolbar />
    <InventoryList />
        </PageWrapper>
  )
}
