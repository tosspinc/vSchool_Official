What do props help us accomplish?
    Makes a component reusable.

How do you pass a prop into a component?
A: export default function name(props).  {props.name}   
    

Can I pass a custom prop (e.g. blahblahblaht={true}) to a native DOM element? WHy or why not.
    No, when react recognizes an element it is expressed through jsx as an object. this object determines the actual dom node (properties or attributes) that will be used.

How do I receive a prop in a component?
function navbar(props) {
    return (
        <header> 

        </header>
    )
}


what data type is 'props' when the component recieves it?
    it is an object property.