import { component$, useStylesScoped$, useStore, useClientEffect$, useContextProvider, createContext, useContext, useWatch$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import Modal from '../modal/modal';

export default component$(() => {
  const store = useStore({
    scrolled: false,
    numItems: 0,
    modal: false
  })

  useClientEffect$(() => {
    if (localStorage.getItem('apparelBasket')) {
      const numItemsInBasket = JSON.parse(localStorage.getItem('apparelBasket')).items.length
      store.numItems = numItemsInBasket
    }
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
      {store.modal && <Modal/>}
      <a href="/" style="background-color: rgba(15, 23, 42, 0.25); border-radius: 15px;">Apparel Store</a>
      <div class="flex" style="background-color: rgba(15, 23, 42, 0.25); border-radius: 25px; cursor-pointer"
      onClick$={() => {
        store.modal = true
      }}>
        <i class="fa fa-shopping-cart p-2"></i>
        <span class="text-base mr-3"> {store.numItems} </span>
      </div>
    </header>
  );
});
