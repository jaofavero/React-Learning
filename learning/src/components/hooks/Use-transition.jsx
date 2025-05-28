
import { useState, useTransition } from 'react';

export const TransitionExample = () => {
    
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [data, setData] = useState([]);


    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
     .catch(error => console.error('Erro ao buscar dados:', error));

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        startTransition(() => {
            const filtered = data.filter(item =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredItems(filtered);
        });
    };

    return (
        <div className="transition-example">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
            />
            {isPending ? (
                <p>Working on it...</p>
            ) : (
                <ul>
                    {filteredItems.length > 0 ? (
                        filteredItems.map(item => (
                        <li key={item.id}>{item.name}</li> // Use key para itens de lista
                        ))
                    ) : (
                        <p>Nenhum item encontrado.</p> // Caso a busca não retorne resultados
                    )}
                </ul>
            )}
        </div>
    );



};