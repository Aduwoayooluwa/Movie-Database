import { atom } from 'nanostores';

const initV = { theme: false}
export const isDefaultTheme = atom(initV)

function defTheme() {
    isDefaultTheme.set({ theme: !isDefaultTheme.get().theme})
}

export { initV, defTheme }