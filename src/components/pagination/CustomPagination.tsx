import Pagination from "react-bootstrap/Pagination";
import PaginationSelect from "./PaginationSelect";

interface CustomPaginationProps {
  take: number;
  onTakeChange: (itemsPerPage: number) => void;
  onPageChange: (page: number) => void;
  options: number[];
  currentPage: number;
  hasNextPage: boolean;
}
const CustomPagination = ({
  take,
  onTakeChange,
  options,
  currentPage,
  onPageChange,
  hasNextPage,
}: CustomPaginationProps) => {
  return (
    <Pagination>
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />
      <Pagination.Item>{currentPage}</Pagination.Item>
      <Pagination.Next
        disabled={!hasNextPage}
        onClick={() => onPageChange(currentPage + 1)}
      />
      <PaginationSelect take={take} options={options} onChange={onTakeChange} />
    </Pagination>
  );
};
export default CustomPagination;
