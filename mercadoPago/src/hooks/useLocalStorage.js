const useLocalStorage = () => {
    const loadState = () => {
        try {
            const serializedState = localStorage.getItem('authState');
            if (serializedState === null) {
                return undefined;
            }
            return JSON.parse(serializedState);
        } catch (err) {
            return undefined;
        }
    };

    const saveState = (state) => {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('authState', serializedState);
        } catch {
            // Manejo de errores en caso de que no se pueda guardar en LocalStorage
        }
    };
    return { loadState, saveState };
}

export default useLocalStorage;