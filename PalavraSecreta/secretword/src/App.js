import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { wordslist } from './data/word';
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordslist);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  // CORREÇÃO 1: pickWordAndCategory retorna um objeto agora para bater com a desestruturação
  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    // Ajuste na lógica do random (categories já é um array de chaves)
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  // CORREÇÃO 2: Sintaxe correta para função arrow e movida para cima para ser usada no startGame (se necessário)
  const clearLetterStates = useCallback(() => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }, []); // Sem dependências externas

  const startGame = useCallback(() => {
    // Limpa os estados
    clearLetterStates();

    // Recebe como objeto
    const { word, category } = pickWordAndCategory();

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory, clearLetterStates]); // Adicionado clearLetterStates nas dependências

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // CORREÇÃO 3: Estrutura if/else corrigida (faltava fechar chaves)
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  useEffect(() => {
    if (guesses <= 0) {
      // Reseta os estados limpos ao ir para tela de Game Over
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses, clearLetterStates]); // Adicionado clearLetterStates para evitar warning

  // Win condition
  useEffect(() => {
    // Prevenção para não rodar na primeira renderização quando letters está vazio
    if(letters.length === 0) return;

    const uniqueLetters = [...new Set(letters)];

    // Ganhou
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => actualScore + 100);
      
      // restart game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;