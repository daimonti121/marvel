import { useState, useEffect } from 'react';

import Spinner from '../spinner/Spinner';
import './charList.scss';

const CharList = () => {
    const [cards, setCards] = useState(null);
    const [loading, setLoading] = useState(true);

    const onCharLoaded = () => {
        setLoading(false);
    };

    useEffect(() => {
        fetch(
            `https://marvel-server-zeta.vercel.app/characters?limit=9&apikey=d4eecb0c66dedbfae4eab45d312fc1df`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data.results);
                setCards(data.data.results);
                onCharLoaded();
            });
    }, []);

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <ListCards cards={cards} /> : null;

    return (
        <div className='char__list'>
            <ul className='char__grid'>
                {spinner}
                {content}
            </ul>
            <button className='button button__main button__long'>
                <div className='inner'>load more</div>
            </button>
        </div>
    );
};

const ListCards = ({ cards }) => {
    
    return (
        <>
            {cards &&
                cards.map((card) => (
                    <li className='char__item'>
                        <img
                            src={
                                card.thumbnail.path +
                                '.' +
                                card.thumbnail.extension
                            }
                            alt='abyss'
                        />
                        <div className='char__name'>{card.name}</div>
                    </li>
                ))}
        </>
    );
};



export default CharList;
