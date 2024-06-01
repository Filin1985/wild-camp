import {useSearchParams} from "react-router-dom"
import Select from "./Select"

function SortBy({options}) {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortBy = searchParams.get("sortBy") || ""

  function handleChange(evt) {
    const {value} = evt.target
    searchParams.set("sortBy", value)
    setSearchParams(searchParams)
  }

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={sortBy}
      type="white"
    />
  )
}

export default SortBy
