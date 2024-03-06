import { Header } from '@/components/ui/header';

export default function Home() {
  return (
    <>
      <Header
        image={
          <img
            alt="Flowbite Logo"
            className="mr-3 h-6 sm:h-9"
            src="https://flowbite.com/docs/images/logo.svg"
          />
        }
      />
      <main className="container mx-auto h-full py-2">
        <p>sdsd</p>
      </main>
    </>
  );
}
