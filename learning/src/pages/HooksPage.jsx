import React from 'react';
import { StateExample } from '../components/hooks/Use-state.jsx';
import { EffectExample } from '../components/hooks/Use-effect.jsx';
import { ContextExample } from '../components/hooks/Use-context.jsx';
import { ReducerExample } from '../components/hooks/Use-reducer.jsx';
import { RefExample } from '../components/hooks/Use-ref.jsx';
import { LayoutEffectExample } from '../components/hooks/Use-layout-effect-use-inserction-effect.jsx';
import { IdExample } from '../components/hooks/Use-id.jsx';
import { TransitionExample } from '../components/hooks/Use-transition.jsx';
import { DeferredExample } from '../components/hooks/Use-deferred-value.jsx';
import { SyncExternalStoreExample } from '../components/hooks/Use-sync-external-store.jsx';


const HooksPage = () => {
  return (
    <>
    <section className="info-section">
      <h3>Exploring hooks from React</h3>
      <p>Bellow you can see diferents types of hooks</p>
    </section>

      <section className="card" tag='useRef'>
        <h2>useRef</h2>
        <RefExample/>
      </section>

      <section className="card" tag='useReducer'>
        <h2>useReducer</h2>
        <ReducerExample />
      </section>

      <section className="card" tag='useState'>
        <h2>useState</h2>
        <StateExample/>
      </section>

      <section className="card" tag='useEffect'> 
        <h2>useEffect</h2>
        <EffectExample />
      </section>

      <section className="card" tag='useLayoutEffect & useInsertionEffect'>
        <h2>useLayoutEffect e useInsertionEffect</h2>
        <LayoutEffectExample/>
      </section>

      <section className="card" tag='useContext'>
        <h2>useContext</h2>
        <ContextExample />
      </section>

      <section className="card" tag='useId'>
        <h2>useId</h2>
        <IdExample />
      </section>

      <section className="card" tag='useSyncExternalStore'>
        <h2>useSyncExternalStore</h2>
        <SyncExternalStoreExample />
      </section>
      
      <section className="card" tag='useTransition'>
        <h2>useTransition</h2>
        <TransitionExample />
      </section>

      <section className="card" tag='useDeferredValue'>
        <h2>useDeferredValue</h2>
        <DeferredExample />
      </section>

    </>
  );
}

export default HooksPage;