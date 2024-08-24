import { DataGrid } from '@mui/x-data-grid';
import { getTodos } from '@services/todos_service';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '@layouts/providers/storeProvider.tsx';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'userId', headerName: 'ID пользователя', width: 130 },
  { field: 'title', headerName: 'Заголовок', width: 130 },
];

const Todos = () => {
  const { todoStore } = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTodos().then(data => {
      todoStore.setTodoList(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div style={{ height: 'calc(100dvh - 300px)', width: '100%' }}>
        <DataGrid
          loading={isLoading}
          rows={todoStore.todoList.value}
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
};

export default Todos;
