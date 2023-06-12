import React from 'react';

type CardProps = {
    image: string;
    selected: boolean;
    onClick: () => void;
};

const Card = ({ image, selected, onClick }: CardProps) => {
    return (
        <div className="card">
            <div className={selected ? 'selected' : ''}>
                <img alt="" src={image} className="card-face" />

                <img
                    alt=""
                    className="card-back"
                    src={'/assets/question.png'}
                    onClick={onClick}
                />
            </div>
        </div>
    );
};


export default Card;