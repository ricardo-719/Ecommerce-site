import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="flex flex-1">
      {/* Background image */}
      <img src="https://cdn.pixabay.com/photo/2016/03/20/13/48/zip-1268656_960_720.jpg"
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
