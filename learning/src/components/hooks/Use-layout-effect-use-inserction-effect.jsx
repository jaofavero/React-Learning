import { useLayoutEffect, useState, useRef, useInsertionEffect } from "react";

export const LayoutEffectExample = () => {
  const [width, setWidth] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {

      if (boxRef.current) {
        setWidth(boxRef.current.offsetWidth);
      }
  }, []);

  return (
    <div className="layout-effect-example">
      <div ref={boxRef} className="box">
        <InsertionEffectExample/>
      </div>
      <p>Current box width: {width}px</p>
    </div>
  );
}

export const InsertionEffectExample = () => {
  // useInsertionEffect é um hook para bibliotecas de CSS-in-JS.

  useInsertionEffect(() => {
    // Atenção: Esta é uma SIMULAÇÃO de como uma biblioteca de CSS-in-JS
    // usaria useInsertionEffect. Não é a maneira recomendada para um projeto simples,
    // pois o CSS pode ser facilmente gerenciado com arquivos .css ou inline styles.

    const styleId = "dynamic-insertion-style";
    let styleTag = document.getElementById(styleId);

    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }

    // Conteúdo CSS dinâmico
    styleTag.textContent = `
      .dynamic-insertion-class {
        color: white;
        background-color: #4CAF50; /* Verde */
        padding: 15px;
        border-radius: 8px;
        margin-top: 20px;
        font-weight: bold;
        text-align: center;
      }
      .dynamic-insertion-class:hover {
        background-color: #45a049;
      }
    `;

    // Função de limpeza: remove a tag de estilo quando o componente for desmontado
    return () => {
      if (styleTag && styleTag.parentNode) {
        styleTag.parentNode.removeChild(styleTag);
      }
    };
  }, []); // Array de dependências vazio, roda apenas uma vez

  return (
    // Aplica a classe que foi injetada via useInsertionEffect
    <div className="dynamic-insertion-class">
      Estilizado com useInsertionEffect (Exemplo conceitual)
    </div>
  );
};