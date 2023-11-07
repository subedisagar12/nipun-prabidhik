import * as React from "react";

// Mui Imports

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { visuallyHidden } from "@mui/utils";
import TableInput from "./Table/CustomInput";
import { Button, Icon, IconButton, Stack, Tab, Tabs } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Component Import
import CustomModal from "./CustomModal";
import ClientForm from "./ClientForm";
import FilterBar from "./Table/FilterBar";
import { tableData, tableHeaders } from "../data/TableData";
import EnhancedTableHead from "./Table/TableHead";
import UserDisplay from "./Table/UserDisplay";
import { fireSuccessToaster } from "../providers/alert";

export default function DataTable() {
  const [errorField, setErrorField] = React.useState("");

  const [selected, setSelected] = React.useState([]);
  const [rows, setRows] = React.useState(tableData);

  const [openForm, setOpenForm] = React.useState(false);

  const [headCells, setHeadCells] = React.useState(tableHeaders);

  // Function to handle the select all
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  // Function to handle checkbox click of each item
  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleCellDataChange = (e, id, key) => {
    let temp = [...rows];
    temp[id][key] = e.target.value;
    setRows(temp);
  };

  const createNewRow = (e, data) => {
    e.preventDefault();

    if (!data.name) {
      setErrorField("name");
      return;
    }

    if (!data.email) {
      setErrorField("email");
      return;
    }

    if (!data.phone) {
      setErrorField("phone");
      return;
    }

    let temp = [...rows];

    let nowDate = new Date()
      .toISOString()
      .split("T")[0]
      .split("-")
      .reverse()
      .join("-");
    temp.push({
      ...data,
      id: temp.length,
      last_update: nowDate,
    });
    setRows(temp);
    setOpenForm(false);
    fireSuccessToaster("Client has been created");
  };

  return (
    <>
      <Paper
        sx={{
          mt: 2,
        }}
      >
        <FilterBar />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ my: 2, ml: 3 }}
            onClick={() => setOpenForm(true)}
          >
            New Client
          </Button>

          <Tabs
            value={1}
            aria-label="basic tabs example"
            textColor="success"
            indicatorColor="success"
          >
            <Tab value={0} label="Prospects(18)" />
            <Tab value={1} label="Clients(10)" />
            <Tab value={2} label="Archived(10)" />
          </Tabs>
        </Box>

        <Box sx={{ overflow: "auto", height: "400px", paddingBottom: "50px" }}>
          <Table
            sx={{
              "& .MuiTableCell-root": {
                border: "1px solid #EAECF0",
              },
            }}
          >
            <EnhancedTableHead
              headCells={headCells}
              setHeadCells={setHeadCells}
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow>
                    <TableCell
                      padding="checkbox"
                      onClick={(event) => handleClick(event, row.id)}
                      aria-checked={isItemSelected}
                    >
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    {headCells
                      .filter((item) => !item.isHidden)
                      .map((headCell, headIndex) => {
                        return (
                          <TableCell>
                            {headCell.id === "name" ? (
                              <UserDisplay
                                editable={true}
                                name={row["name"]}
                                email={row["email"]}
                                handleNameChange={(e) =>
                                  handleCellDataChange(e, index, "name")
                                }
                                handleEmailChange={(e) =>
                                  handleCellDataChange(e, index, "email")
                                }
                              />
                            ) : headCell.id === "assignee" ? (
                              <UserDisplay
                                name="Sagar Subedi"
                                email="subedisagar12@gmail.com"
                              />
                            ) : (
                              <TableInput
                                type={headCell.type}
                                options={headCell.options}
                                disabled={headCell.id === "last_update"}
                                value={row[headCell.id]}
                                handleValueChange={(e) =>
                                  handleCellDataChange(e, index, headCell.id)
                                }
                              />
                            )}
                          </TableCell>
                        );
                      })}
                  </TableRow>
                );
              })}

              <TableRow>
                <TableCell />
                <TableCell colSpan={2}>
                  <Button size="small" color="grey" startIcon={<AddIcon />}>
                    Add Client's Detail
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Paper>

      <CustomModal
        open={openForm}
        handleClose={() => setOpenForm(false)}
        title="Create New Client"
      >
        <ClientForm
          handleSubmit={createNewRow}
          errorField={errorField}
          setErrorField={setErrorField}
        />
      </CustomModal>
    </>
  );
}
