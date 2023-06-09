import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

export default function BasicTable() {
  const [data, setData] = useState([
    {
      name: "",
      price: "",
      quantity: "",
      types: "",
      set: "",
      collector_number: "",
      condition: "",
      finnish: "",
    },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("URL_DEL_SERVIDOR")
      .then((response) => response.json())
      .then((result) => {
        // Actualizar el estado de los datos en tu componente
        setData(result);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Tipos</TableCell>
              <TableCell align="right">Set</TableCell>
              <TableCell align="right">Collector-number</TableCell>
              <TableCell align="right">Condition</TableCell>
              <TableCell align="right">Finnish</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.set}</TableCell>
                <TableCell align="right">{row.collector_number}</TableCell>
                <TableCell align="right">{row.condition}</TableCell>
                <TableCell align="right">{row.finnish}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={10} />
    </>
  );
}
