import Contact from './component/contact/Contact';
import Intro from './component/intro/Intro';
import Portfolio from './component/portfolio/Portfolio';
import Testimonials from './component/testmonials/Testimonials';

import Topbar from './component/topbar/Topbar';
import Works from './component/works/Works';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
