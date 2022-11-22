import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="flex flex-1">
      {/* Background image */}
      <img src="https://escrituras-eremitas.com/wp-content/uploads/2022/11/1792305-scaled.jpg"
      alt="person at the pool" class="object-cover"/>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Apparel Store',
  meta: [
    {
      name: 'description',
      content: 'Apparel Store',
    },
  ],
};
