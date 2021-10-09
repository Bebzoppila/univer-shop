export const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 1.3
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
    }
};
export const pageStyle = {
    // width: '100%'
};
export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};