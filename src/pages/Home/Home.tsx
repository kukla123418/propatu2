import "./Home.css";
import {PokemonList} from '../Pokemons/PokemonList';
import {MyHeader} from '../../components/MyHeader/MyHeader';
export const Home = () => {

return (
    <div className={'home-container'}>
      <MyHeader />
      <div className={'home-content'}>
        <PokemonList />
      </div>
    </div>
)


}

