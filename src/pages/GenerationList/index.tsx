import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import GenerationItem from '../../components/GenerationItem';

import api from '../../services/api';

import './styles.css';

interface Pokemon {
    id: number;
    name: string;
}

function GenerationList() {

    const url = window.location.href.split('/generation/');
    const idUrl = url[1].replace("/","");
    const title = `Generation ${idUrl}`;

    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        api.get(`/generation/${idUrl}`).then(response => {
            setPokemonList(response.data.pokemon_species);
        })
    }, [idUrl]);
    
    return (
        <div id="page-generation-list" className="container">
            <PageHeader title={title} />

            <main>
                {pokemonList.map((pokemon: Pokemon) => {
                    return (
                        <GenerationItem key={pokemon.id} pokemon={pokemon} />
                    );
                })}
            </main>
        </div>
    );
};

export default GenerationList;