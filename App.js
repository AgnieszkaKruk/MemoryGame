
import "./App.css";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h2>Play memory game</h2>
				
				<h4> Select two cards:</h4>
				div className="container"
				</header>
				<div>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
			
		</div>
	);
}

export default App;
