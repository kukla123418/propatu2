import "./pokemon.css";

interface PokemonProps {
  name: string;
  type: string;
}
export const Pokemon = ({name, type}:PokemonProps) => {

  return (
    <>
    <div className="line">
      <hr></hr>
    </div>
    <div className="row">
      <div>
        <strong>{name}</strong>
      </div>
      <div>
        {type}
      </div>
    </div>
    </>
  )
}

