import Carousel from './components/Carousel';
import Destination from './components/Destination';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Select from './components/Select';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Select />
      <Carousel />
    </div>
  );
}
