import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

interface PaginationProps {
  take: number;
  onChange: (itemsPerPage: number) => void;
  options: number[];
}
const PaginationSelect = ({ take, options, onChange }: PaginationProps) => {
  return (
    <Dropdown className="ms-2" as={ButtonGroup}>
      <Button variant="outline-secondary">{take}</Button>
      <Dropdown.Toggle
        split
        variant="outline-secondary"
        id="dropdown-split-basic"
      />
      <Dropdown.Menu>
        {options.map((itemPerPage) => {
          return (
            <Dropdown.Item
              key={`itemPerPage-${itemPerPage}`}
              onClick={() => onChange(itemPerPage)}
            >
              {itemPerPage}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PaginationSelect;
