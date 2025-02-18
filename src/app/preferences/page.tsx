import AccountDetails from '@/partials/AccountDetails';
import { NotificationPreferences } from '@/partials/NotificationPreferences';
import { PageWrapper } from '@/partials/PageWrapper';

export default function Page() {
  return (
    <PageWrapper>
      <AccountDetails />
      <NotificationPreferences />
    </PageWrapper>
  );
}
