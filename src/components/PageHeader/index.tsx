import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.png';
import backIcon from '../../assets/images/back.svg';

interface PageHeaderProps {
    title? : string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar" className="back"/>
            </Link>

            <img src={logoImg} alt="Pokémon" className="logo"/>
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>
        </div>
    </header>
    );
};

export default PageHeader;