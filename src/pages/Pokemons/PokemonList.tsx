import {Pokemon} from './Pokemon/Pokemon';

export const PokemonList = () => {

  return (
    <div>
      <Pokemon name={'Pikaču'} type={'ohnivý'}/>
      <Pokemon name={'Squirtle'} type={'vodný'}/>
      <Pokemon name={'Psyduck'} type={'psycho'} />
    </div>
  )
}

