import { useId } from 'react';

export const IdExample = () => {
  // useId é um hook que gera IDs únicos para componentes, útil para acessibilidade e identificação de elementos.
  const id = useId();
  const id2 = useId();

  return (
    <div className="id-example">
      <label htmlFor={id}>First:</label>
      <input id={id} type="text" placeholder="Digite Algo" />
      <label htmlFor={id2}>Second:</label>
      <input id={id2} type="text" placeholder="Digite Algo" />
    </div>
  );
}