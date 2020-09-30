import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

interface PokemonProps {
    pokemon: {
        id: number;
        name: string;
    }
};

function DataSheet(name: string) {
    const [dataSheet, setDataSheet] = useState([]);

    useEffect(() => {
        api.get(`pokemon/${name}`).then(response => {
            setDataSheet(response.data.sprites.front_default);
        })
    }, [name]);

    return dataSheet;
}

const GenerationItem: React.FC<PokemonProps> = ({ pokemon }) => {

    const pokemonItem = DataSheet(pokemon.name) as any;

    return ( 
            <article className="generation-item">
                <header>
                    <img src={pokemonItem} alt={pokemon.name}/>
                    <strong>{pokemon.name.toUpperCase()}</strong>
                </header>
            </article>
    )
}

export default GenerationItem;