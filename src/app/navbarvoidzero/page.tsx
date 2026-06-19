import { VoidZeroHeader } from '@/components/voidzero/VoidZeroHeader';

export default function NavbarVoidZeroPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col">
      <VoidZeroHeader />
      <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Task 3: VoidZero Header</h1>
        <p>This route is dedicated to testing the Task 3 navigation bar.</p>
      </div>
    </main>
  );
}
