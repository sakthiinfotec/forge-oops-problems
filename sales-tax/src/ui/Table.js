import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 450,
    mixWidth: 550
  },
  header: {
    fontWeight: "bold"
  },
  nameCell: {
    textTransform: "capitalize"
  }
});

/**
 * Referred from https://codesandbox.io/s/htvjz?file=/demo.js:0-2024
 */
export default function BasicTable({
  header,
  rows,
  totalSalesTax,
  totalSaleAmount
}) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((col) => (
              <TableCell
                key={col}
                component="th"
                scope="row"
                className={classes.header}
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                className={classes.nameCell}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unitPrice}</TableCell>
              <TableCell align="right">{row.salesTax}</TableCell>
              <TableCell align="right">{row.salePrice}</TableCell>
            </TableRow>
          ))}
          <TableRow key={"saleTax"}>
            <TableCell align="right" colSpan={4}>
              Total Sales Tax
            </TableCell>
            <TableCell align="right">{totalSalesTax}</TableCell>
          </TableRow>
          <TableRow key={"saleAmount"}>
            <TableCell align="right" colSpan={4}>
              Total Sale Amount
            </TableCell>
            <TableCell align="right">{totalSaleAmount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
