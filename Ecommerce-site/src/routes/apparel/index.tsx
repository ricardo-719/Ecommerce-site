import { component$, useClientEffect$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 20,
  });

  useClientEffect$(({  }) => {
    
  });

  return (
    <div>
      
    </div>
  );
});

export const head: DocumentHead = {
  title: '{ name }',
};
