import './App.css';
import { useMediaQuery } from 'react-responsive';
import Mobile from './Components/Mobile/Mobile'
import Desktop from './Components/Desktop/Desktop';

function App() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1024px)'})
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  return (
    <div className='App' >
        {isPortrait && <Mobile></Mobile>}
        {isDesktopOrLaptop && <Desktop></Desktop>}
    </div>
  );
}

export default App;
