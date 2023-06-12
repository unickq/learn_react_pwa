import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/theme";

export type HeaderProps = {
    wins: number;
    startNewGame: () => void;
};

export const Header: React.FC<HeaderProps> = ({ startNewGame, wins }) => {
    const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;


    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeTheme("dark");
        console.log(theme);
        // changeTheme(event.target.value );
    };

    return (
        <header className="header">
            <h3>My Game</h3>
            <h4>Wins: {wins}</h4>
            <button onClick={startNewGame}>New Game</button>
            <input type="number" id="qty" placeholder="2" onChange={handleThemeChange}  min="2" max="10"/>
        </header>
    );
};