import { Link } from 'react-router-dom';
import './dataTable.scss'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'


  
type Props = {
    columns:GridColDef[],
    row:object[]
    slug: string;

}
const DataTable = (props:Props) => {


    const handleDelete = (id: number) => {
        console.log('deleted'+id)
      };

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="action">
              <Link to={`/${props.slug}/${params.row.id}`}>
                <img src="/view.svg" alt="" />
              </Link>
              <div className="delete" onClick={() => handleDelete(params.row.id)}>
                <img src="/delete.svg" alt="" />
              </div>
            </div>
          );
        },
      }; 
   
  return (
    <div className='DataTable'>
      <DataGrid
      className='DataGride'
        rows={props.row}
        columns={[...props.columns,  actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500}
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}
export default DataTable