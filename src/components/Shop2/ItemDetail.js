import { useParams } from "react-router-dom"

const ItemDetail = () => {

  const { id } = useParams()

  useEffect(() => {
    getItemDetails
  }, [])
  

  const getItemDetails = () => { 
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 1000);
    })

   }
  return (
    <div>ItemDetail</div>
  )
}
export default ItemDetail