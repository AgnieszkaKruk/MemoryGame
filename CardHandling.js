import Card from "./card";
import uniqueElementsArray from './data';
import "./app.scss";

export default function App() {
  const [cards, setCards] = useState(
    () => shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const timeout = useRef(null);

  