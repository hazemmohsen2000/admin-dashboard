import { useState } from "react"
import "./products.scss"
import DataTable from "../../componenets/dataTable/DataTable"
import Add from "../../componenets/add/Add"
import { products } from "../../data";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];
const Products = () => {
  
  const [open, setOpen] = useState(false);
    return (
    <div className="products">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add new Products</button>
      </div>
      <DataTable  slug="Products" columns ={columns} row = {products}/>
      {open && <Add slug = "Products" columns={columns} setOpen = {setOpen}/>}
    </div>
  
)
}
export default Products