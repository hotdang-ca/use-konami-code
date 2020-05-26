const KONAMICODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'b', 'a', 'Enter'];  

export const useKonamiCode = (onSuccess: () => void, onFail: () => void) => {
    let userInputs: string[] = [];

    window.onkeyup = (e: KeyboardEvent) => {
        const { key } = e;

        if (KONAMICODE.indexOf(key) === -1) {
            if (onFail) {
                onFail();
            }
            return;
        }

        userInputs = [
            ...userInputs,
            key,
        ];

        const idx = userInputs.length - 1;
        if (userInputs[idx] !== KONAMICODE[idx]) {
            // sequence is broken, reset
            userInputs = [];

            if (onFail) {
                onFail();
            }
            
            return;
        }

        if (JSON.stringify(userInputs) === JSON.stringify(KONAMICODE)) {
            if (onSuccess) {
                onSuccess();
            }
            return;
        }
    }
};