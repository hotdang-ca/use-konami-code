const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export const useKonamiCode = (onSuccess: () => void, onFail: () => void, altCode?: string[]) => {
    let userInputs: string[] = [];
    const code: string[] = altCode || KONAMI_CODE;

    window.onkeyup = (e: KeyboardEvent) => {
        const { key } = e;

        if (code.indexOf(key) === -1) {
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
        if (userInputs[idx] !== code[idx]) {
            // sequence is broken, reset
            userInputs = [];

            if (onFail) {
                onFail();
            }
            
            return;
        }

        if (JSON.stringify(userInputs) === JSON.stringify(code)) {
            if (onSuccess) {
                onSuccess();
            }
            return;
        }
    }
};