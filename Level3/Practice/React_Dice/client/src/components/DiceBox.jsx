import React from "react";
import { useState } from "react";
import Die from "./Die";

export default function DiceBox() {
    const [state, setState] = useState([
        { id: 1, number: 0, selected: false },
        { id: 2, number: 0, selected: false },
        { id: 3, number: 0, selected: false },
        { id: 4, number: 0, selected: false },
        { id: 5, number: 0, selected: false },
    ]);

    const [rolls, setRolls] = useState(0);      //sets the initial value for rolls to 0.
    const [hasStarted, setHasStarted] = useState(false); //sets the initial state of hasStarted to false.

    
    function saveDie(id) {
        const newDice = state.map((die) =>      //declares newDice as a constant variable and maps each one of the individual die current state.
          die.id === id ? { ...die, selected: !die.selected } : die 
        );
        setState(newDice);
      }    

    function rollAllDice() {
        if (rolls === 4) {
            resetDice();        //calls the resetDice function and sets it to its original state which should be zero.
            return;
        }

        const newDice = state.map((die) => ({       //creates a new instance or object of each die individually.
            ...die,
            //the following checks to see if die has been selecter or not.  
            //if die is false and has started is true then a random number is generated and assigned to each individual die.
            number: die.selected || !hasStarted ? die.number : Math.floor(Math.random() * 6) + 1

        }));
        
        setState(newDice);      //sets the state of the newDice array with each of the new random numbers assigned to it.
        setRolls((prevRolls) => prevRolls + 1);

        if (!hasStarted) {
            setHasStarted(true);
        }
    }

    //this function resets the die to a value of zero.
    function resetDice() {
        const newDice = state.map((die) => {
            if (die.selected) {
                return { ...die, number: 0, selected: false };
            } else {
                return { ...die, number: 0 };
            }
        });

        setState(newDice);      //updates the component's state with the new array of dice represented by 'newDice'.
        setRolls(0);            //sets the value to zero for 'rolls'.
        setHasStarted(false);   //sets the current state of 'hasStarted' to false.
    }
      

    return (
        <div className="dice--div">
            {state.map(({ id, number, selected }) => (
                <Die
                    key={id}
                    number={number}
                    selected={selected}
                    onClick={() => saveDie(id)}
                />
            ))}
            
            <button className="dice rollAllButton" onClick={rollAllDice}>
                Roll All of the Dice.
            </button>
        </div>
    )
}