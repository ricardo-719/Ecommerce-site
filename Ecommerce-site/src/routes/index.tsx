import { component$, useContext, useContextProvider, createContext, useStore, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import ProductsGrid from '~/components/products-grid/products-grid';
import { MyContext } from '~/root';

export default component$(() => {

const contextState = useContext(MyContext)
  useClientEffect$(() => {
    if (localStorage.getItem('appBasket')) {
      contextState.items = [...JSON.parse(localStorage.getItem('appBasket'))]
    }
  })

  return (
    <div class="flex flex-1 flex-col">
      {/* Background image */}
      <section class="min-h-screen flex relative">
        <img src="https://escrituras-eremitas.com/wp-content/uploads/2022/11/1792305-scaled.jpg"
        alt="person at the pool" class="object-cover"/>
        <a href="#products" class="absolute left-1/2 -translate-x-1/2 top-2/3 -translate-y-1/2 p-4 px-8 border-2 
        text-white border-solid border-white hover:text-slate-900 after:absolute after:bg-white after:right-full
        after:top-0 after:w-full after:h-full hover:after:translate-x-full after:duration-300 overflow-hidden">
          <h3 class="relative z-20 text-center">Shop Apparel</h3></a>
      </section>
      <ProductsGrid/>
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
