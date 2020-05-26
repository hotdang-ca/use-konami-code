# Konami Code React Hook

## What is it?
Allows you to `useKonamiCode` to listen in on any React Functional Component for the Konami Code sequence. Provide an `onSuccess` and `onFail` callback.

Eg:
```js
import { useKonamiCode } from 'use-konami-code';
import { useState } from 'react';

const HomeComponent: React.FC<any> = () => {
    const [ message, setMessage ] = useState('');
    useKonamiCode(() => {
        setMessage('You did it!');
    }, () => {
        setMessage('');
    });

    return (
        <div>
            { message && <span>{message}</span> }
        </div>
    )
}
```

## Custom Code Sequence
You can also provide an alternate code sequence, a `String[]` consisting of JavaScript Event Keycodes, as a third parameter, eg:

```js
    const alternateKonamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'b', 'a', 'Enter'];

    useKonamiCode(() => {
        setMessage('you do remember!');
    }, () => {
        setMessage('');
    }, alternateKonamiCode);
```
Try [Keycode.info](https://keycode.info) to set up your own code.

## What is the Konami Code?
From [Wikipedia](https://en.wikipedia.org/wiki/Konami_Code):
> The Konami Code (Japanese: コナミコマンド, Konami komando, "Konami command") is a cheat code that appears in many Konami video games, and some non-Konami games. In the original code, the player can press the following sequence of buttons on the game controller to enable a cheat or other effects:
> 
> ↑ ↑ ↓ ↓ ← → ← → B A

## Author
James Perih @ Four And A Half Giraffes, Ltd.