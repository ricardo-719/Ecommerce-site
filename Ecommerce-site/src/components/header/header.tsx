import { component$, useStylesScoped$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <header class="fixed top-0 left-0 w-full flex justify-between items-center p-4
    text-white text-3xl sm:text-5xl font-extrabold">
      <h1 style="background-color: rgba(130, 20, 20, 0.25); border-radius: 15px;">Apparel Store</h1>
      <div>
      <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  );
});
