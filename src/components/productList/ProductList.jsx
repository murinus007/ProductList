import React from "react"
import { useSelector } from "react-redux"
import { useFirestoreConnect } from "react-redux-firebase"
import ProductItem from "../productItem/ProductItem"
import "./productList.css"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { useHistory } from "react-router-dom"

let ProductList = () => {
  const history = useHistory()
  const [sortValue, setSortValue] = React.useState("")

  /// Connect to firebase
  useFirestoreConnect({
    collection: `products`,
    storeAs: "products",
  })

  const products = useSelector((state) => state.firestore.data.products)
  
  const handleChange = (event) => {
    setSortValue(event.target.value)
  }

  return (
    <div>
      <FormControl>
        <InputLabel>Sort</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={sortValue}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"byName"}>By Name</MenuItem>
          <MenuItem value={"byCount"}>By Count</MenuItem>
        </Select>
      </FormControl>

      <div className={"productList"}>
        {products &&
          Object.values(products)
            .sort((a, b) => {
              if (sortValue == "byName") {
                return a.name > b.name ? 1 : -1
              } else {
                return +a.count > +b.count ? 1 : -1
              }
            })
            .map((product) => (
              <ProductItem
                name={product.name}
                id={product.id}
                imageUrl={product.imageUrl}
                count={product.count}
                description={product.description}
                onClick={() => {
                  history.push({
                    pathname: "/details",
                    state: product.id,
                  })
                }}
              />
            ))}
      </div>
      <button onClick={() => history.push("/create")}>Add new product</button>
    </div>
  )
}

export default ProductList
