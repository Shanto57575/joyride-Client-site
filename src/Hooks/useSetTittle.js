import { useEffect } from "react"

const useSetTittle = title => {
    useEffect(() => {
        document.title = `JoyRider | ${title}`;
    }, [title])
}

export default useSetTittle;