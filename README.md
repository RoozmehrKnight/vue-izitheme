# What is this?

vue-izitheme provides a simple api to manage themes in your web application, using css variables.

# Requirements
Vue: ^2.0.0


# Installation

```
npm i vue-izitheme
```

# Configuration
```
import iziTheme from 'vue-izitheme';
Vue.use(izitheme);
```

# Usage

use <a>CSS Variables</a> throughout your project but instead of hard coding the variable values, use the iziTheme setTheme() method to inject the variable values into DOM.

## Example

HTML
```
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```

CSS
```
p{
    color: var(--textColor);
    background-color: var(--background-color);
}
```

JS
```
this.setTheme({
    //variableName : 'variableValue',
    textColor: #888,
    'background-color': '#ccc',
    ...
});
```

### note
the setTheme() method can be used again to remove the old theme and add a new one.

## Usage with Sass variables

For izitheme to work with Sass variables you can simply put them equal to css variables like below:

```
$textColor: var(--variableName);
```
# Available methods

- **setTheme(themeObject):** sets a new theme.

- **getCurrentTheme():** return the current theme object.

- **checkThemeExists():** returns true if any css related to izitheme exists. returns false otherwise.

- **removeCurrentTheme():** removes the theme css.