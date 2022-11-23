import { component$, useStylesScoped$, useStore } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';

export default component$(() => {
  const store = useStore({
    scrolled: false
  })

  return (
    <header class={"fixed top-0 left-0 w-full flex justify-between items-center p-4 text-white text-3xl sm:text-5xl font-extrabold sm:p-8 z-40 " 
    + (store.scrolled ? 'bg-slate-900 shadow' : 'bg-transparent')} 
    document:onScroll$={()=> {
      if (window.scrollY > 0) {
        store.scrolled = true
      } else {
        store.scrolled = false
      }
    }}>
      <h1 style="background-color: rgba(15, 23, 42, 0.25); border-radius: 15px;">Apparel Store</h1>
      <div>
      <i class="fa-solid fa-cart-shopping">Cart</i>
      </div>
    </header>
  );
});
