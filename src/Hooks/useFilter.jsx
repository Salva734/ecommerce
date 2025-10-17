import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

function useFilter(paramName) {
  const [filter, setFilter] = useState([])
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const value = searchParams.get(paramName)
    const array = value ? value.split(',').filter(Boolean) : []
    const unique = Array.from(new Set(array))
    setFilter(unique)
  }, [paramName, searchParams])

  const toggleFilter = (id) => {
    let newFilter

    if (filter.includes(id)) {
      newFilter = filter.filter((item) => item !== id)
    } else {
      newFilter = [...filter, id]
    }
    setFilter(newFilter)

    const newParams = new URLSearchParams(searchParams)

    if (newFilter.length > 0) {
      newParams.set(paramName, newFilter.join(','))
    } else {
      newParams.delete(paramName)
    }

    navigate(`?${newParams.toString()}`)
  }

  return {
    filter,
    toggleFilter,
  }
}

export default useFilter
