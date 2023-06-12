import { useEffect } from "react";

export type HeaderProps = {
    wins: number;
    startNewGame: () => void;
};

export const Header: React.FC<HeaderProps> = ({ startNewGame, wins }) => {
    return (
        <header className="header">
            <h3>My Game</h3>
            <h4>Wins: {wins}</h4>
            <button onClick={startNewGame}>New Game</button>
        </header>
    );
};