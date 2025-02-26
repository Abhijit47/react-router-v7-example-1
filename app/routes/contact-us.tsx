import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { contactFormSchema, type ContactFormValues } from '~/schemas';
import type { Route } from './+types/contact-us';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Contact us Page' },
    { name: 'description', content: 'Get in touch with us for any inquiries!' },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  let title = formData.get('title');

  return null;
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData();
  let title = formData.get('title');
  // let project = await someApi.updateProject({ title });
  return null;
}

export default function ContactUsPage() {
  // 1. Define your form.
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    mode: 'onChange',
  });

  // 2. Define a submit handler.
  function onSubmit(values: ContactFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <main className={'py-8 md:py-12 lg:py-16'}>
      <section className={'max-w-[85em] mx-auto px-4 2xl:px-0 space-y-8'}>
        <Card className={'max-w-3xl mx-auto'}>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'>
                <div className={'grid grid-cols-2 gap-2'}>
                  <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your first name'
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className={'text-xs'}>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage className={'text-xs'} />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your last name'
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className={'text-xs'}>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage className={'text-xs'} />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your email address'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className={'text-xs'}>
                        We'll never share your email with anyone else.
                      </FormDescription>
                      <FormMessage className={'text-xs'} />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={8}
                          placeholder='Enter your message'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className={'text-xs'}>
                        Please provide a detailed message.
                      </FormDescription>
                      <FormMessage className={'text-xs'} />
                    </FormItem>
                  )}
                />
                <Button type='submit' className={'w-full'} variant={'outline'}>
                  Submit Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <Card className={'max-w-3xl mx-auto'}>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'>
                <div className={'grid grid-cols-2 gap-2'}>
                  <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your first name'
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className={'text-xs'}>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage className={'text-xs'} />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your last name'
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className={'text-xs'}>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage className={'text-xs'} />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your email address'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className={'text-xs'}>
                        We'll never share your email with anyone else.
                      </FormDescription>
                      <FormMessage className={'text-xs'} />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={8}
                          placeholder='Enter your message'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className={'text-xs'}>
                        Please provide a detailed message.
                      </FormDescription>
                      <FormMessage className={'text-xs'} />
                    </FormItem>
                  )}
                />
                <Button type='submit' className={'w-full'} variant={'outline'}>
                  Submit Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
