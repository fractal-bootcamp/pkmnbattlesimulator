
import React, { useState } from 'react';

const App = () => {
  const [blastoise, setBlastoise] = useState({
    name: "Blastoise",
    imageUrl: {
      front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png"
    },
    healthPoints: 100,
    maxHealthPoints: 100,
    attacks: [
      { name: "Water Gun", power: 40, type: "Water", accuracy: 100 },
      { name: "Hydro Pump", power: 110, type: "Water", accuracy: 80 },
      { name: "Bite", power: 60, type: "Dark", accuracy: 100 },
      { name: "Skull Bash", power: 130, type: "Normal", accuracy: 100 }
    ],
    attack: 83,
    defense: 100,
    speed: 78,
    type: "Water"
  });

  const [charizard, setCharizard] = useState({
    name: "Charizard",
    imageUrl: {
      front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png"
    },
    healthPoints: 100,
    maxHealthPoints: 100,
    attacks: [
      { name: "Flamethrower", power: 90, type: "Fire", accuracy: 100 },
      { name: "Fire Blast", power: 110, type: "Fire", accuracy: 85 },
      { name: "Dragon Claw", power: 80, type: "Dragon", accuracy: 100 },
      { name: "Air Slash", power: 75, type: "Flying", accuracy: 95 }
    ],
    attack: 84,
    defense: 78,
    speed: 100,
    type: "Fire/Flying"
  });

  // Additional state and functions for handling the battle logic


  function accuracy({ pokemon1 }) {
    const randomNumber = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

    if (randomNumber === pokemon1.attacks.accuracy) {
      return true
    }

  };


  function damageCalculator({ pokemon1, pokemon2 }) {

    const totalAttack = pokemon1.attacks.power + pokemon1.attack;
    const totalDefense = pokemon2.defense;
    const totalDamage = totalDefense - totalAttack;
    return pokemon2.healthPoints - totalDamage

  };

  function initiative({ pokemon1, pokemon2 }) {

    if (pokemon1.speed > pokemon2.speed) {
      return pokemon1
    }

    else return pokemon2
  };



  return (
    <div>

      <h3>Let's battle!</h3>

    </div>
  );
};

export default App;
