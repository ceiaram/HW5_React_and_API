// https://pokeapi.co/
import React from "react";

const Pokie = () => {
  // useState is a hook that allows us to track state in a function component.
  // Abilities array is then stored in the abilities state variable using the setAbilities function
  const [abilities, setAbilities] = React.useState([]);

  // useEffect is a hook in React that allows you to manage side effects in your functional components.
  // Side effects are any changes that happen outside of the component itself, such as fetching data from an API, updating the DOM, or subscribing to a WebSocket
  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then((res) => res.json())
      .then((json) => {
        // Dictionary key is "abilities"
        setAbilities(json.abilities);
      });
  }, []);

  // Remember every React component returns ONE child
  return (
    <div className="pokie">
      <h1> Ditto's Abilities </h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
        width="250"
      />
      {/* Abilities array is mapped over and rendered as a series of div elements, with each div displaying the name, 
      is_hidden, and slot properties of each ability object in the array */}
      {abilities?.map((ability) => (
        <div key={ability.id}>
          <h3>Ability</h3>
          <p>{ability.ability.name}</p>
          <p>{ability.is_hidden}</p>
          <h3>Slot</h3>
          <p>{ability.slot}</p>
        </div>
      ))}
    </div>
  );
};

export default Pokie;
