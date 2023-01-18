import './styles/app.scss';
import SettingsBar from './components/SettingsBar';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';

export const App = () => {
  return (
    <div className="app">
      <Toolbar />
      <SettingsBar />
      <Canvas />
    </div>
  );
};
