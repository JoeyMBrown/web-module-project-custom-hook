import { useState } from 'react';

//5.  key = 'darkMode', and initialValue = false
//6. create state, "storedValue", and setStoredValue
//7. declare a variable called item
//8. items value is set by checking localstorage, for anything stored with a value of the given key ('darkMode')
//9. If key doesn't match any data stored - return undefined.  If matching key is found, return the data associated with that key.
//10. Running getItem(key) will either return SOME DATA, or undefined
//11. If the variable item exists, and points to something that isn't (null, or undefined) then this if statement is true.  Then parse item (turn it an object) and return it.
//12. If the variable item doesn't exist, or points to undefined or null - return the initialValue (false).
//13. The return value of the anon function inside of useState, will set the storedValue variable item or false
//14. return storedValue (item if it exists), or false if it doesn't exist.
//15. return setValue, which is just a function used to update storedValue.
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    // setValue function does: 
    //1. accepts a value as an argument
    //2. updates storedValue to the value it recieved
    //3. Adds that value to localStorage, with the key.
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];  //===> true, false, initialValue (false)
}

export default useLocalStorage;