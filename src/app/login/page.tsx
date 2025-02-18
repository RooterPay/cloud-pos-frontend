import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-black border-0 text-white">
        <CardHeader className="space-y-2">
          <CardTitle className="text-4xl font-bold text-center text-white">
            Rooter Cloud POS
          </CardTitle>
          <p className="text-lg text-center text-gray-400">
            Enter your email below to enter your merchant area
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-4">
            <Input 
              type="email" 
              placeholder="name@example.com"
              className="h-12 bg-transparent border-gray-700 text-white"
              required
            />
            <Button 
              type="submit" 
              className="w-full h-12 bg-white text-black hover:bg-gray-200"
            >
              Sign In with Email
            </Button>
          </form>

          <p className="text-sm text-center text-gray-400">
            By clicking continue, you agree to our{' '}
            <a href="#" className="underline hover:text-white">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="#" className="underline hover:text-white">
              Privacy Policy
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
