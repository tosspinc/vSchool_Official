1. What is a "side effect" in React? What are some examples?
A:  code that is being run however, react does not control it.  
    examples: local storage, API, websockets, two states to keep in sync.


2. What is NOT a "side effect" in React? Examples?
A:  Anything that React controls. 
    examples: when maintaing a state, keeping UI in sync with the data. 
        rendering DOM elements.

3. When does React run your useEffect function? When does it NOT run
   the effect function?
A: as soon as a component or object is run.
    everytime a component is re-rendered or runs a new state.

    will not run the effect when the values of the dependencies in
    an array stay the same between rendering of a component or object.

4. How would you explain what the "dependecies array" is?
A: It is the second parameter ({}, [xxxx]) 
    and is a way for react to know if it should re-run a function.