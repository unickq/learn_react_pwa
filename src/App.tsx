import { useState, useEffect } from 'react';
import './App.css';
import { shuffle } from './utils/shuffle';
import Card from './components/Card';
import { CardType } from './types/CardType';
import { Header } from './components/Header';


function App() {
  const [cards, setCards] = useState<CardType[]>(shuffle);
  const [pickOne, setPickOne] = useState<CardType | null>(null); // First selection
  const [pickTwo, setPickTwo] = useState<CardType | null>(null); // Second selection
  const [disabled, setDisabled] = useState(false); // Delay handler
  const [wins, setWins] = useState(0); // Win streak
  const [attempts, setAttempts] = useState(0);

  const handleClick = (card: CardType) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  }

  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setAttempts(attempts + 1);
    setDisabled(false);
  }

  // Used for selection and match handling
  useEffect(() => {
    let pickTimer: NodeJS.Timeout;

    if (pickOne && pickTwo) {
      // Check if the cards the same
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              // Update card property to reflect match
              return { ...card, matched: true };
            } else {
              // No match
              return card;
            }
          });
        });
        handleTurn();
      } else {
        // Prevent new selections until after delay
        setDisabled(true);
        // Add delay between selections
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, pickOne, pickTwo]);

  // If player has found all matches, handle accordingly
  useEffect(() => {
    // Check for any remaining card matches
    const checkWin = cards.filter((card) => !card.matched);

    // All matches made, handle win/badge counters
    if (cards.length && checkWin.length < 1) {
      console.log('You win!');
      setWins(wins + 1);
      handleTurn();
      setCards(shuffle);
    }
  }, [cards, wins]);

  const startNewGame = () => {
    setWins(0);
    handleTurn();
    setAttempts(0);
    setCards(shuffle);
  }

  return (
    <>
      <Header startNewGame={startNewGame} wins={wins} attempts={attempts} />

      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;

          return (
            <Card
              key={id}
              image={image}
              selected={card === pickOne || card === pickTwo || matched}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
