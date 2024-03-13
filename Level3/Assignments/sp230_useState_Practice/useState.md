/*pass in a new color*/
1:  const [color, setColor] = useState('red')
A: setColor('blue')

/*toggle between previous color and new color*/
2:  const [color, setColor] = useState('red')
a:  setColor(prevColor => prevColor === 'red' ? 'blue' : 'red')   /*if prev color was red change to blue. if it was not red then make it red.*/

/*add a new person object to people and do not change or overwrite the old data.*/
3: const [People, setPeople] = useState ([
        {
            firstName: 'John',
            lastName: 'Smith'
        }
    ])

a: setPeople (prevPeople => {
        return [
            ...prevPeople /*use spread syntax to call in prevPeople data*/
            {
                firstName: 'Jane',
                lastName: 'Doe'
            }
        ]
    })

/* Change the following state-setting functions to use implicit and explicit returns. implicit you do not need the return when there is just one line of 
code to evaluate.  when there are several lines of code with data to evaluate then you need the return and use an explicit return.  --do not completely understand. */
4: 
    A)  const [colors, setColors] = setState(['pink', 'blue'])

        //explicit return
        setColors(prevColors => { 
            return [...prevColors, 'green']
            })

        //implicit return
        setColors(prevColors => [...preColors, 'green'])

    B)  const [countObject, setCountObject] = setState({
            count: 0;
        })

        //explicit return
        setCountObject (prevState =>    {
            return {
                count: prevState.count + 1;
            }
        })

        //implicit return
        setCountObjext (prevState => ({count: prevState.count + 1}))


/* update the following state and add an additional propery of age and do not overwrite the previouse code.  just add the age to the existing code.*/ 
5:  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Smith
})

setPerson(prevState => ({
    ...prevState,
    age: 30;                /*ads the age with the number 30 to the above array.*/
}))

/*What's wrong with the following state update?*/
6:  const [colors, setColors] = useState(['pink', 'blue'])

    setColors('green')

A:  The array data is changed from an array format [] to a string format ''.  Also, the data has been overwritten - in react we want the state to be immutable.  we should never change the state.  if it is an array it should stay and array,  it a string stay a string. etc.