import Background from './components/Background';
import Content from './components/Content';
import RouletteProvider from './components/Roulette/RouletteContext';

function App() {
	return (
		<div className='App'>
			<RouletteProvider>
				<Content />
			</RouletteProvider>
		</div>
	);
}

export default App;
