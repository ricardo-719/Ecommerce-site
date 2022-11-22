import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class="flex-1 flex flex-col min-h-screen relative">
        <Header />
          <Slot />
      </main>
      <footer>

      </footer>
    </>
  );
});
