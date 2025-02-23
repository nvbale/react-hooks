export const PokemonCard = ({id, name, sprites = []}) => {
  return (
    <section style={{height: 200}}>
      
      <h2 className={"text-capitalize"}>#{id} - {name}</h2>
      {/*Images*/}
      <div>
        {sprites.map(sprite => (
          <img key={sprite} src={sprite} alt={name}/>
        ))}
      </div>
    </section>
  )
}

PokemonCard.propTypes = {
  id: String,
  name:
  String,
  sprites: [],
}