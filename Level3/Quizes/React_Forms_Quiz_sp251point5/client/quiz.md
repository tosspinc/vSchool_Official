1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?

A) just before the form is submitted - gathering data from each element.


2. In a React app, when do you gather all the data from
   the filled-out form?

A) after initializing the function for it and then clicking on the submit button. the state is updated each time as the data is being completed and it is stored locally.


3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
   
A) the name property.

4. What's different about saving the data from a checkbox element
   vs. other form elements?

A) in most of the form elements we are using the value property. With a checkbox we verifty that it has been checked.


5. How do you watch for a form submit? How can you trigger a form submit?

A) we add an onSubmit handler on the 'form' and then a button click is added.  with react the button is automatically configured to read or acknowledge when the onClick is handled and we do not need to code this as with regular html or javascript code.