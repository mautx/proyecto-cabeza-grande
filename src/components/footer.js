import {BottomNavigation, BottomNavigationAction, DialogActions, DialogContent, DialogContentText} from "@mui/material";
import {
  AddShoppingCart,
  RemoveShoppingCart,
  ShoppingCartCheckoutSharp,
} from "@mui/icons-material";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function Footer() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <>
      <BottomNavigation showLabels="True">
        <BottomNavigationAction
          label="Agregar a carrito"
          icon={<AddShoppingCart />}
          onClick={handleClickOpen}
        />
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Producto agregado con éxito."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              La carta con nombre Plains con precio 0.50 ha sido agregada con éxito
              al carrito de compra.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Aceptar</Button>
          </DialogActions>
        </Dialog>


        <BottomNavigationAction
          label="Eliminar de carrito"
          icon={<RemoveShoppingCart />}
          onClick={handleClickOpen1}
        />
        <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Producto eliminado con éxito."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              La carta con nombre Plains con precio 0.50 ha sido eliminada con éxito
              al carrito de compra.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1}>Aceptar</Button>
          </DialogActions>
        </Dialog>


        <BottomNavigationAction
          label="Realizar compra"
          icon={<ShoppingCartCheckoutSharp />}
          onClick={handleClickOpen2}
        />
        <Dialog
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Compra realizada"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Compra realizada con éxito.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2}>Aceptar</Button>
          </DialogActions>
        </Dialog>

      </BottomNavigation>
    </>
  );
}
