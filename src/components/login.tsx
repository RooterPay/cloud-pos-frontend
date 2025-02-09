import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Login = () => {
  return (
    <section className='min-h-screen flex items-center justify-center'>
      <div className='mx-auto w-full max-w-sm rounded-md p-6 bg-background shadow'>
        <div className='mb-6 flex flex-col items-center text-center'>
          <span className='mb-12 flex items-center gap-4'>
            <p className='text-xl font-bold'>Rooter</p>
          </span>
          <p className='mb-2 text-2xl font-bold'>Log in to your account</p>
          <p className='text-muted-foreground'>
            Welcome back! Please enter your email.
          </p>
        </div>
        <div>
          <div className='grid gap-4'>
            <div>
              <Input type='email' placeholder='test@test.com' required />
            </div>

            <Button type='submit' className='mt-2 w-full'>
              Sign in
            </Button>
          </div>
          <Separator className='mt-4 md:mt-6' />
          <div className='mx-auto mt-4 md:mt-6 flex justify-center gap-1 text-sm text-muted-foreground'>
            <p>Don&apos;t have an account?</p>
            <a href='#' className='font-medium text-primary'>
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login };
