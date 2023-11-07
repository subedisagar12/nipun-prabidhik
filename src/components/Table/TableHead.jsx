import React from "react";
// Mui
import {
  Button,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

// Components
import CustomModal from "../CustomModal";
import HiddenColumnList from "../Table/HiddenColumnList";

// Assets import
import MoreIcon from "../../assets/dashboard/more.png";
import { fireSuccessToaster } from "../../providers/alert";

export default function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    headCells,
    setHeadCells,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openColumnModal, setOpenColumnModal] = React.useState(false);

  const open = Boolean(anchorEl);
  const [selectedHeader, setSelectedHeader] = React.useState("");

  const handleClickMenu = (event, columnId) => {
    setAnchorEl(event.currentTarget);
    setSelectedHeader(columnId);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Function that hides the column
  const hideColumn = () => {
    let temp = [...headCells];
    let myHeader = temp.find((item) => item.id === selectedHeader);
    myHeader.isHidden = true;
    setHeadCells(temp);
    handleCloseMenu();
  };

  // function to add back the column
  const addColumn = (columnId) => {
    let temp = [...headCells];
    let myHeader = temp.find((item) => item.id === columnId);
    myHeader.isHidden = false;
    setHeadCells(temp);
    fireSuccessToaster("Column has been added");
  };

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" width={100}>
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "Select All",
              }}
            />
          </TableCell>
          {headCells
            .filter((item) => item.isHidden === false)
            .map((headCell) => (
              <TableCell
                key={headCell.id}
                align={"left"}
                padding={headCell.disablePadding ? "normal" : "normal"}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <Stack direction="row">
                  <TableSortLabel
                    style={{ width: 100 }}
                    IconComponent={UnfoldMoreIcon}
                    active={true}
                  >
                    <h4> {headCell.label}</h4>
                  </TableSortLabel>
                  <IconButton onClick={(e) => handleClickMenu(e, headCell.id)}>
                    <img src={MoreIcon} />
                  </IconButton>
                </Stack>
              </TableCell>
            ))}

          <TableCell>
            <Button onClick={() => setOpenColumnModal(true)}>Add Column</Button>
          </TableCell>
        </TableRow>
      </TableHead>

      <CustomModal
        open={openColumnModal}
        handleClose={() => setOpenColumnModal(false)}
        title="Hidden Columns"
      >
        <HiddenColumnList
          hiddenColumn={headCells.filter((item) => item.isHidden === true)}
          addColumn={addColumn}
        />
      </CustomModal>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={hideColumn}>Hide Column</MenuItem>
      </Menu>
    </>
  );
}
