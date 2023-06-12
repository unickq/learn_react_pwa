import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/theme";

export const Footer: React.FC = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;
    return (
        <footer className="header">
            <h3>Theme: {theme}</h3>        
        </footer>
    );
};