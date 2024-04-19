import CursorAura from '@/components/domain/CursorAura';
import Header from '@/components/ui/header';

export default function Home() {
  return (
    <>
      <Header logo={<p>Macu</p>} />
      <main className="container mx-auto h-full bg-transparent py-2">
        <p>sdsd</p>
        <CursorAura />
      </main>
    </>
  );
}
