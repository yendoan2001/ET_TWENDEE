import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { Avatar, ListItemAvatar } from "@mui/material";
import { Card } from "react-bootstrap";
import CustomPagination from "./pagination/CustomPagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/user-slice";
import { AppDispatch, RootState } from "../store";
import Loading from "./Loading";
import { useNavigate, useSearchParams } from "react-router-dom";

function Users() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const { entities, loading } = useSelector((state: RootState) => state.users);
  const [pagination, setPagination] = useState({
    page: Number(searchParams.get("page")) || 1,
    take: Number(searchParams.get("take")) || 10,
  });
  const options = [5, 10, 25, 50, 100];

  useEffect(() => {
    navigate(`/users?page=${pagination.page}&take=${pagination.take}`, {
      replace: true,
    });
    dispatch(fetchUsers(pagination));
  }, [pagination, navigate, dispatch]);

  const onPageChange = (page: number) => {
    setPagination((pagination) => ({ ...pagination, page }));
  };

  const onTakeChange = (itemsPerPage: number) => {
    setPagination((pagination) => ({ ...pagination, take: itemsPerPage }));
  };

  if (loading) return <Loading />;
  return (
    <div>
      <Card className="mt-4 w-100">
        <Card.Header>User List</Card.Header>
        <Card.Body>
          <CustomPagination
            take={pagination.take}
            options={options}
            onTakeChange={onTakeChange}
            hasNextPage={true}
            currentPage={pagination.page}
            onPageChange={onPageChange}
          />
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Thumbnail Icon</th>
                <th>FullName</th>
                <th>User Name</th>
              </tr>
            </thead>
            <tbody>
              {entities &&
                entities.map((item: any, index: number) => (
                  <tr key={index}>
                    <td className="align-middle">{index + 1}</td>
                    <td className="align-middle">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={item.picture.thumbnail} />
                      </ListItemAvatar>
                    </td>
                    <td className="align-middle">
                      {`${item.name.title}. ${item.name.first} ${item.name.last}`}
                    </td>
                    <td className="align-middle">{item.login.username}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <CustomPagination
            take={pagination.take}
            options={options}
            onTakeChange={onTakeChange}
            hasNextPage={true}
            currentPage={pagination.page}
            onPageChange={onPageChange}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Users;
