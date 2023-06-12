import { useEffect } from "react";

export type HeaderProps = {
    wins: number;
    attempts: number;
    startNewGame: () => void;
};

export const Header: React.FC<HeaderProps> = ({ startNewGame, attempts, wins }) => {
    return (
        <header className="header">
            <h3>React Game</h3>
            <h4>Attempts: {attempts}</h4>
            <h4>Wins: {wins}</h4>
            <button onClick={startNewGame}>New Game</button>
        </header>
    );
};