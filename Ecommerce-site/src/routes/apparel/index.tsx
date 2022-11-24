import { component$, useClientEffect$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();

  const state = useStore({
    name: '',
    price: '',
    url: ''
  });

  useClientEffect$(() => {
    const data = JSON.parse(localStorage.getItem('pprl'))
    state.name = data.name
    state.price = data.price
    state.url = data.url
  });

  return (
    <div class="flex flex-col gap-2 justify-center">
      <img src={state.url} alt={state.name} class="object-cover relative z-10 max-w-[520px] mx-auto" />
      <div class="flex flex-col p-1">
        <h2 class="text-3xl text-center font-medium">{state.name}</h2>
        <p class="text-center text-xl">${state.price}</p>
      </div>
      <button onClick$={() =>{
        let appBasket = {items: []}
        if (localStorage.getItem('apparelBasket')){
          appBasket = JSON.parse(localStorage.getItem ('apparelBasket'))
        }
        appBasket.items.push([state])
        localStorage.setItem('apparelBasket', JSON.stringify(appBasket))
      }} class="border py-4 border-slate-900 border-solid px-8 mx-auto hover:opacity-50">Add to Cart</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Add to Cart',
};
