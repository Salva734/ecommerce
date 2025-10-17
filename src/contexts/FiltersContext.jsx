import { createContext } from 'react'
import {useSearchParams} from 'react-router-dom'

export const FiltersContext = createContext()

export function FiltersContextProvider(props) {
 const [searchParams, setSearchParams] = useSearchParams()

  return (
    <FiltersContext.Provider value = {{searchParams, setSearchParams}}>
      {props.children}
    </FiltersContext.Provider>
  )
}

export default FiltersContext


