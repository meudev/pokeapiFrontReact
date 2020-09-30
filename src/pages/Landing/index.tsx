import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.png';
import pokeballImg from '../../assets/images/pokeball.svg';

import './styles.css';

interface Generation {
    name: string;
    url: string;
}

function Landing(){
    const [generationList, setGenerationList] = useState([]);

    useEffect(() => {
        api.get('generation').then(response => {
            setGenerationList(response.data.results);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Pokeball"/>
                    <h2>Gerações do Game</h2>
                </div>

                    <main className="menu-version">
                        {generationList.map((generation: Generation) => {

                            return (
                                <Link to={`/generation/${generation.url.replace("https://pokeapi.co/api/v2/generation/","")}`}>
                                    {generation.name.toUpperCase().replace("-", " ")}
                                </Link>
                            );
                        })}
                    </main>

                <span className="developer">
                    Desenvolvido por Adrian Salomon Ferreira Abdesalan <img src={pokeballImg} alt="Pokeball"/>
                </span>
            </div>
        </div>
    )
};

export default Landing;