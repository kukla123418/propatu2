import {Pokemon, PokemonTypes} from './Pokemon/Pokemon';
import './pokemonList.css'
import TableFilter from '../../components/TableFilter/TableFilter';


export const PokemonList = () => {

  return (
    <div className={'pokemon-list'}>
      <h1>Zoznam pokemonov</h1>
      <TableFilter filterBasicInputs={['asda', 'asda2']} filterAdvancedInputs={['12 2','12 2','12 2']} />
      <Pokemon name={'Pikaču'} type={PokemonTypes.ohnivy}/>
      <Pokemon name={'Squirtle'} type={PokemonTypes.vodny}/>
      <Pokemon name={'Psyduck'} type={PokemonTypes.psycho} />
    </div>
  )
}

