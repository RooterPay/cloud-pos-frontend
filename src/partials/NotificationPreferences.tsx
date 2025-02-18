'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function NotificationPreferences() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Manage your notification settings.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex items-center justify-between'>
          <Label htmlFor='email-notifications'>Email Notifications</Label>
          <Switch id='email-notifications' />
        </div>
        <div className='flex items-center justify-between'>
          <Label htmlFor='sms-notifications'>SMS Notifications</Label>
          <Switch id='sms-notifications' />
        </div>
      </CardContent>
    </Card>
  );
}
