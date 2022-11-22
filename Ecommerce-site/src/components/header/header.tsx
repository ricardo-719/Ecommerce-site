import { component$, useStylesScoped$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <header class="fixed top-0 left-0 w-full flex justify-between items-center p-4
    text-white text-xl sm:text-4xl">
      <h1>Apparel Store</h1>
      <div>
      <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  );
});
