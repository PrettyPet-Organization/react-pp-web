import { DataGrid } from "@mui/x-data-grid";
import { getTodos } from "@services/todos_service";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "userId", headerName: "ID пользователя", width: 130 },
  { field: "title", headerName: "Заголовок", width: 130 },
];

const rows = await getTodos();

function Todos() {
  return (
    <>
      <div style={{ height: "calc(100dvh - 300px)", width: "100%" }}>
        <DataGrid
          loading={!rows}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 50 },
            },
          }}
          pageSizeOptions={[50, 100]}
        />
      </div>
    </>
  );
}

export default Todos;
