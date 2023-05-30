import "./pokemon.css";

export enum PokemonTypes {
  ohnivy = 'ohnivy',
  vodny = 'vodny',
  psycho = 'psycho',
  travovy = 'travovy'
}
const getColorFromType = (type: PokemonTypes):string => {
  switch (type) {
    case PokemonTypes.ohnivy:
      return '#ff1616'
    case PokemonTypes.psycho:
      return '#fcc73e'
    case PokemonTypes.vodny:
      return '#58a9fa'
    case PokemonTypes.travovy:
      return "#008000"
    default: {
        return 'red'
    }
  }
};

interface PokemonProps {
  name: string;
  type: PokemonTypes;
}
export const Pokemon = ({name, type}:PokemonProps) => {


  return (
    <>
    <div className="row">
      <div className="pokemon-name">
        <span>{name}</span>
      </div>
      <div className="pokemon-type" style={{background: getColorFromType(type)}}>
        <strong>{type}</strong>
      </div>
    </div>
    </>
  )
}

