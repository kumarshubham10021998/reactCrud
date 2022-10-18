import React, { useState } from "react";
import { Box, makeStyles, FormGroup, FormControl, InputLabel, TextField, Input, Button, Typography } from "@material-ui/core";
import { addUser } from "../Service/Api";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: "20px"
    }
  },
  button: {
    backgroundColor: "#0DCAF0"
  }
});

const initialValues = {
  name: "",
  price: "",
  discription: "",
  sort_order: "",
  status:"",
  date:"",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, price, discription, sort_order,status,date } = user;
  const classname = useStyles();
  const history = useNavigate();

  const valueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetail = async () => {
    await addUser(user);
    history("/all");
  };

  return (
    <Box>
      <FormGroup className={classname.container}>
        <Typography variant="h3"> Add User </Typography>
        <FormControl>
          <InputLabel> Name </InputLabel>
          <Input onChange={(e) => valueChange(e)} name="name" value={name} />
        </FormControl>
        <FormControl>
          <InputLabel> Price</InputLabel>
          <Input
            onChange={(e) => valueChange(e)}
            name="price"
            value={price}
            type="number"
          />
        </FormControl>
        <FormControl>
        <InputLabel> Discription</InputLabel>
          <textarea
            onChange={(e) => valueChange(e)}
            name="discription"
            value={discription}
            cols="50"
            rows="5"

          ></textarea>
        </FormControl>
        <FormControl>
          <InputLabel> Sort_Order </InputLabel>
          <Input type="number" onChange={(e) => valueChange(e)} name="sort_order" value={sort_order} />
        </FormControl>
        <FormControl>
          <InputLabel>Status</InputLabel>
          <Input type="number" onChange={(e) => valueChange(e)} name="status" value={status} />
        </FormControl>
        <FormControl>
          <InputLabel>Date</InputLabel>
          <Input type="date" onChange={(e) => valueChange(e)} name="date" value={date} />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addUserDetail()}
        >
          Add User
        </Button>
      </FormGroup>
    </Box>
  );
};

export default AddUser;
