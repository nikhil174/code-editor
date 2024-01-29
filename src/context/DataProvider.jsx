import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({children}) => {

    const [html, setHtml] = useState('<button class="glow-on-hover" type="button" id="btn">HOVER ME, THEN CLICK ME!</button>');
    const [css, setCss] = useState("html, body { margin: 0; padding: 0; width: 100%; height: 100vh; display: flex; flex-direction: row; justify-content: center; align-items: center; background: #fff; } .glow-on-hover { width: 220px; height: 50px; border: none; outline: none; color: #fff; background: #111; cursor: pointer; position: relative; z-index: 0; border-radius: 10px; } .glow-on-hover:before { content: ''; background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000); position: absolute; top: -2px; left:-2px; background-size: 400%; z-index: -1; filter: blur(5px); width: calc(100% + 4px); height: calc(100% + 4px); animation: glowing 20s linear infinite; opacity: 0; transition: opacity .3s ease-in-out; border-radius: 10px; } .glow-on-hover:active { color: #000 } .glow-on-hover:active:after { background: transparent; } .glow-on-hover:hover:before { opacity: 1; } .glow-on-hover:after { z-index: -1; content: ''; position: absolute; width: 100%; height: 100%; background: #111; left: 0; top: 0; border-radius: 10px; } @keyframes glowing { 0% { background-position: 0 0; } 50% { background-position: 400% 0; } 100% { background-position: 0 0; } } Result.jsx:14 html, body { margin: 0; padding: 0; width: 100%; height: 100vh; display: flex; flex-direction: row; justify-content: center; align-items: center; background: #000; } .glow-on-hover { width: 220px; height: 50px; border: none; outline: none; color: #fff; background: #111; cursor: pointer; position: relative; z-index: 0; border-radius: 10px; } .glow-on-hover:before { content: ''; background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000); position: absolute; top: -2px; left:-2px; background-size: 400%; z-index: -1; filter: blur(5px); width: calc(100% + 4px); height: calc(100% + 4px); animation: glowing 20s linear infinite; opacity: 0; transition: opacity .3s ease-in-out; border-radius: 10px; } .glow-on-hover:active { color: #000 } .glow-on-hover:active:after { background: transparent; } .glow-on-hover:hover:before { opacity: 1; } .glow-on-hover:after { z-index: -1; content: ''; position: absolute; width: 100%; height: 100%; background: #111; left: 0; top: 0; border-radius: 10px; } @keyframes glowing { 0% { background-position: 0 0; } 50% { background-position: 400% 0; } 100% { background-position: 0 0; } }");
    const [js, setJs] = useState(" const btn = document.getElementById('btn'); btn.addEventListener('click', (e) => { e.target.textContent = 'CLICKED!!'; });");

    return (
        <DataContext.Provider
            value={{
                html,
                setHtml,
                css,
                setCss,
                js,
                setJs,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;