import React from "react";
import {
  Select,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import TextInput from "./Form/TextInput";

const initialState = {
  name: "",
  image: "",
  email: "",
  added_from: "System",
  tags: "",
  internal_id: "",
  client_id: "",
  phone: "",
  client_portal: "Activated",
  assignee: "Sagar Subedi",
  followers: "",
  status: "In Progress",
  last_update: new Date(Date.now()),
};

function ClientForm({ handleSubmit, errorField, setErrorField }) {
  const [formData, setFormData] = React.useState(initialState);

  const handleFormData = (e) => {
    if (e.target.name === errorField) {
      setErrorField("");
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Box component="form">
        <Stack direction="row" spacing={2} my={3}>
          <TextInput
            error={errorField === "name"}
            label="Name"
            name="name"
            value={formData.name}
            handleChange={handleFormData}
          />
          <TextInput
            error={errorField === "email"}
            label="Email"
            name="email"
            value={formData.email}
            handleChange={handleFormData}
          />
        </Stack>

        <TextInput
          label="Tags"
          name="tags"
          value={formData.tags}
          handleChange={handleFormData}
        />
        <Stack direction="row" spacing={2} my={3}>
          <TextInput
            label="Internal Id"
            name="internal_id"
            value={formData.internal_id}
            handleChange={handleFormData}
          />
          <TextInput
            label="Client Id"
            name="client_id"
            value={formData.client_id}
            handleChange={handleFormData}
          />
        </Stack>

        <TextInput
          error={errorField === "phone"}
          label="Phone"
          name="phone"
          value={formData.phone}
          handleChange={handleFormData}
        />
        <Stack direction="row" spacing={2} my={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Client Portal</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Client Portal"
              size="small"
              name="client_portal"
              value={formData.client_portal}
              onChange={handleFormData}
            >
              <MenuItem value="Activated">Activated</MenuItem>
              <MenuItem value="Deactivated">Deactivated</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="client-id">Status</InputLabel>
            <Select
              labelId="client-id"
              id="demo-simple-select"
              label="Status"
              size="small"
              name="status"
              value={formData.status}
              onChange={handleFormData}
            >
              <MenuItem value="In Progress">In Progress</MenuItem>

              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <TextInput
          label="Followers"
          name="followers"
          value={formData.followers}
          handleChange={handleFormData}
        />

        <Button
          variant="contained"
          size="small"
          onClick={(e) => handleSubmit(e, formData)}
        >
          Add Client
        </Button>
      </Box>
    </>
  );
}

export default ClientForm;
