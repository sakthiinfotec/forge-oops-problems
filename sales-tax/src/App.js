import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./styles.css";
import Table from "./ui/Table";
import SalesTaxCalculator from "./sales/SalesTaxCalculator";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "80%"
    }
  }
}));

const defaultData = `1 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85`;

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(defaultData);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const stc = new SalesTaxCalculator(value);
  const header = ["Name", "Qty", "Unit Price", "Sale Tax", "Sale Amount"];
  const rows = stc.getItemsList().map((item) => ({
    ...item,
    salesTax: item.salesTax.toFixed(2),
    salePrice: item.salePrice.toFixed(2)
  }));

  return (
    <div className="App">
      <h2>Sales Tax Calculator</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Input Data"
            multiline
            rows={4}
            defaultValue="Default Value"
            value={value}
            onChange={handleChange}
            variant="outlined"
          />
        </div>
      </form>
      <Table
        header={header}
        rows={rows}
        totalSalesTax={stc.getTotalSalesTax().toFixed(2)}
        totalSaleAmount={stc.getTotalSalesAmount().toFixed(2)}
      />
    </div>
  );
}
