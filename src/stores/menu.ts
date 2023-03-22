import { atom } from 'nanostores';

const initialV = {
    theme: 'dark'
}
const render = atom(initialV)

const themeColor = () => render.set({ theme: 'light' })

export { initialV, themeColor}