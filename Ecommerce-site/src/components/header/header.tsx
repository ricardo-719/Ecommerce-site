import { component$, useStylesScoped$, useStore, useClientEffect$, useContextProvider, createContext, useContext, useWatch$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import Modal from '../modal/modal';

export default component$(() => {
  const store = useStore({
    scrolled: false,
    numItems: 0,
    modal: false,
    cart: []
  })

  function onClose() {
    store.modal = false
  }

  useClientEffect$(() => {
    if (localStorage.getItem('apparelBasket')) {
      const appBasket = JSON.parse(localStorage.getItem('apparelBasket'))

      const numItemsInBasket = appBasket.items.length
      store.numItems = numItemsInBasket
      store.cart = appBasket.items
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
      <a href="/" style="background-color: rgba(15, 23, 42, 0.25); border-radius: 15px;">Apparel Store</a>
      <div class="flex" style="background-color: rgba(15, 23, 42, 0.25); border-radius: 25px; cursor-pointer"
      onClick$={() => {
        store.modal = true
      }}>
        <i class="fa fa-shopping-cart p-2"></i>
        {store.numItems > 0 && <span class="text-base mr-3"> {store.numItems} </span>}
      </div>
      {store.modal && <>
        <div id="modal" class="absolute top-0 right-0 w-full h-screen bg-white z-50 flex flex-col 
        gap-4 p-4 text-slate-900 w-[450px]">
          <div class="flex items-center justify-between pb-4 border-b">
              <h1 class="font-bold text-4xl" >CART</h1>
              <i onClick$={() => {
                store.modal = false
              }} class="fa fa-times cursor-pointer hover:scale-125"></i>
          </div>
          {store.cart > 0 ? 
          <div class="bg-slate-400 flex flex-col gap-[1px]">
            {store.cart.map((item) => {
              return (
                <div class="bg-white p-4 flex items-center justify-between">
                  <div class="flex flex-col gap-1">
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                  </div>
                  <i class="fa fa-times"></i>
                </div>
              )
            })}
          </div>
          :<div>
            <h3 class="text-sm">Your Cart is Empty</h3>
          </div>}
      </div>
      </>}
    </header>
  );
});
