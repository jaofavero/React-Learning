import {useEffect } from "react";
import { useState } from "react";
// Importando os hooks necessários do React

export const EffectExample = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Simulando uma chamada de API
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Erro ao buscar dados:', error));
        
        // Cleanup function (opcional)
    },[]);

    return (
        <div>
            <h2>jsonplaceholder</h2>
            <ul>
                {data && data.map((item, index) => (
                    <li key={index}>
                        {item.name ? item.name : "Carregando..."}
                    </li>
                ))}

            </ul>
            {/* Aqui você pode adicionar lógica para demonstrar o uso do useEffect */}
        </div>
    );
};
