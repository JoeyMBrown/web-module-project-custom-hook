import useLocalStorage from './useLocalStorage';

//3. "darkMode" = key, false = initialValue
//4. Call useLocalStorage Hook (function) pass in "darkMode", and false
const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue); //const [darkMode, setDarkMode] = [storedValue, setValue]
    //const {avatar_url, name} = this.props
    return [darkMode, setDarkMode]; // darkMode (item, false) setDarkMode function used to updated darkMode
}

export default useDarkMode;