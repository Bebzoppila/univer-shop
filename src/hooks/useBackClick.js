import { useEffect } from 'react'

function useBackClick(element, function_set) {
    function ChekedEvent(event) {
        !event.path.includes(element.current) && function_set(false)
    }

    useEffect(() => {
        document.addEventListener('click', ChekedEvent)
        return () => document.removeEventListener('click', ChekedEvent)
    }, [])
}
export default useBackClick