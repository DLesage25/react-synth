import { useState, useEffect } from 'react';

// export const useSequence = () => {
//     const [sequence, setSequence]: [any, any] = useState(new Set([]));

//     const toggleSequence = (index: any, value: any) => {
//         if (value) {
//             setSequence(sequence.add(index));
//         } else {
//             sequence.delete(index);
//             setSequence(sequence);
//         }
//     };
//     return [sequence, toggleSequence];
// };

// export const useKey = (targetKey: any) => {
//     const [pressed, setPressed] = useState(false);
//     const onKeyDown = ({ key }: { key: any }) => {
//         if (targetKey === key) setPressed(true);
//     };
//     const onKeyUp = ({ key }: { key: any }) => {
//         if (targetKey === key) setPressed(false);
//     };
//     useEffect(() => {
//         window.addEventListener('keydown', onKeyDown);
//         window.addEventListener('keyup', onKeyUp);

//         return () => {
//             window.removeEventListener('keydown', onKeyDown);
//             window.removeEventListener('keyup', onKeyUp);
//         };
//     }, []);
//     return pressed;
// };

export const useKeysPress = () => {
    const [key, setKey]: [any, any] = useState();
    const [keysPressed, setKeyPressed]: [any, any] = useState(new Set([]));
    let clonedSet;

    const onKeyDown = (e: any) => {
        setKey(e.key);
        setKeyPressed(keysPressed.add(e.key));
    };
    const onKeyUp = (e: { key: any }) => {
        setKey(null);
        clonedSet = new Set(keysPressed);
        clonedSet.delete(e.key);
        setKeyPressed(clonedSet);
    };
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        };
    }, []);
    return [key, keysPressed];
};

// export const useMedia = (query: any) => {
//     let [matches, setMatches] = useState(window.matchMedia(query).matches);

//     // cDM, cDU
//     useEffect(() => {
//         let media = window.matchMedia(query);
//         if (media.matches !== matches) {
//             setMatches(media.matches);
//         }
//         let listener = () => setMatches(media.matches);
//         media.addListener(listener);
//         return () => media.removeListener(listener);
//     }, [query]);

//     return matches;
// };
