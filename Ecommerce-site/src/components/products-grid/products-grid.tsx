import { component$, useStylesScoped$, useStore } from '@builder.io/qwik';
import Card from '../card/card';
import { QwikLogo } from '../icons/qwik';

export default component$(() => {
  //const store = useStore({
    //scrolled: false
  //})
  const apparels = [
    {name: 'Jock', url: 'https://media.boohoo.com/i/boohoo/gzz01646_grey_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit', price: '299'},
    {name: 'Pedleton', url: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/10282-83129?_s=RAABAB0', price: '899'},
    {name: 'Avalon', url: 'https://sfycdn.speedsize.com/5a520e7d-65b5-430f-bbbe-539adfe7537a/https://cdn.shopify.com/s/files/1/0856/7558/products/HollywoodSaira_TonyBlack_Avalon_130.jpg?v=1660241860&width=1600', price: '399'},
    {name: 'Jeans', url: 'https://www.justjeans.com.au/JJ/aurora/images/products/large/010255_denim_l.jpg', price: '299'},
    {name: 'Frenchnavy', url: 'https://cdn.shopify.com/s/files/1/2468/5009/products/0074_28177JWDE_FRENCHNAVY_CHELSEA_2.jpg?v=1665118615', price: '349'},
    {name: 'Dubarry', url: 'https://www.dubarry.com/media/image/d4/1d/42/421703_4.jpg', price: '699'},
    {name: 'Quince', url: 'https://images.ctfassets.net/afruo3gr1g6h/l2M3zY68s1rj153Jw2ozB/125c69303fb80b789b577db3245a14af/QUINCE_W-JKT-8-NVY_2712.jpg?w=1600&q=50', price: '449'},
    {name: 'Leather', url: 'https://images.ctfassets.net/afruo3gr1g6h/5DRjBk9zvvPztkKqldesH/b373a9ac9cd982455ba1c0c4d44bf184/W-JKT-17_0210.jpg?w=1600&q=50', price: '649'},
  ]

  return (
  <div id="products" class="min-h-screen grid place-items-center py-6" >
    <div class="flex gap-4 flex-wrap items-stretch justify-center max-w-[1400px] mx-auto">
      {apparels.map((obj)=>{
        return <Card{...obj}/>
      })}
    </div>
  </div>
  );
});