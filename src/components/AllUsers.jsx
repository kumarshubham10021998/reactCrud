import React, { useEffect, useState } from "react";
import { Box, Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { getUsers, deleteUser } from "../Service/Api"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  table: {
    width: "85%",
    margin: "50px 0 0 50px"
  },
  thead: {
    "& > *": {
      color: "#000000",
      backgroundColor: "#0DCAF0"
    }
  },
  tbody: {}
});

const AllUsers = () => {
  const classname = useStyles();
  const [addData, setAddData] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setAddData(response.data);
  };
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <div>
      <h1 className="text-center my-5">Product</h1>
    <Table className={classname.table}>
      
      <TableHead className={classname.thead}>
        <TableRow>
          <TableCell> ID </TableCell>
          <TableCell> Name </TableCell>
          <TableCell> Price </TableCell> 
          <TableCell> Description </TableCell>
          <TableCell> Sort_Order </TableCell> 
          <TableCell> Status</TableCell> 
          <TableCell> Date </TableCell> 
          <TableCell> </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={classname.tbody}>
        { addData.map((user) => (
          <TableRow>
            <TableCell> {user.id} </TableCell>
            <TableCell> {user.name} </TableCell>
            <TableCell> $ {user.price} </TableCell>
            <TableCell> {user.discription} </TableCell>
            <TableCell> {user.sort_order} </TableCell>
            <TableCell> {user.status} </TableCell>
            <TableCell> {user.date} </TableCell>
            <TableCell>
              <Button className="mx-1" variant="contained" color="Primary" component={Link} style={{ marginleft: "10px" }} to={`/edit/${user.id}`} >
              <i class="fa fa-edit"></i>
              </Button>
              <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)} >
              <i class="fa fa-trash-o"></i>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
};

export default AllUsers;
