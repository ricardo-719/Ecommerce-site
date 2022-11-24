import { component$, useStylesScoped$, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';

export default component$((props) => {
    const {url, name, price} = props

  return (
    <Link href="/apparel">
        <div class="flex flex-col gap-2 sm:max-w-[300px] cursor-pointer border border-solid 
        border-transparent hover:border-slate-900"
        onClick$={()=> {
            localStorage.setItem('pprl', JSON.stringify({...props}))
        }}>
            <img src={url} alt="name" class="min-h-[450px] object-cover" />
            <div class="flex flex-col gap-2 p-4 shadow">
                <h2 class="text-4xl">{name}</h2>
                <p>${price}</p>
            </div>
        </div>
    </Link> 
  );
});