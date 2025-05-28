
import { useDeferredValue, useState } from 'react';

export const DeferredExample = () => {
    
    const [query, setQuery] = useState("");
    //const [filteredItems, setFilteredItems] = useState([]);
    //const [isPending, startTransition] = useTransition();
    const [data, setData] = useState([]);

    const deferredQuery = useDeferredValue(query);

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => setData(json))
     .catch(error => console.error('Erro ao buscar dados:', error));

        const handleChange = (e) => {setQuery(e.target.value)};

    const filteredItems = data.filter(item =>item.title.toLowerCase().includes(deferredQuery.toLowerCase()));


    return (
        <div className="transition-example">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
            />
            { query != deferredQuery && <p>Working on it...</p>}
                <ul>
                    {filteredItems.length > 0 ? (
                        filteredItems.map(item => (
                        <li key={item.id}>{item.title}</li> // Use key para itens de lista
                        ))
                    ) : (
                        <p>Nenhum item encontrado.</p> // Caso a busca não retorne resultados
                    )}
                </ul>
        </div>
    );



};