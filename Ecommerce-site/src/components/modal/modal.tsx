import { component$, useStylesScoped$, useStore, useClientEffect$, useContextProvider, createContext, useContext, useWatch$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';

export default component$((props) => {
    const {onClose} = props
  return (
    <div class="absolute top-0 right-0 w-full h-screen bg-white z-50 flex flex-col gap-4 p-4 text-slate-900">
        <div class="flex items-center justify-between pb-4 border-b">
            <h1 class="font-bold text-4xl" >CART</h1>
            <i class="fa fa-times"></i>
        </div>
    </div>
  );
});