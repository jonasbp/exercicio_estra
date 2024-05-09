import React, { useState, useEffect } from "react";
import { Button, IconButton, Snackbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert"; // Import Alert component for Snackbar

export function ExclusaoCurso() {
  const [cursoId, setCursoId] = useState(""); // State to hold the course ID
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // State for Snackbar severity (success or error)
  const [snackbarMessage, setSnackbarMessage] = useState(""); // State for Snackbar message

  const handleInputChange = (event) => {
    setCursoId(event.target.value);
  };

  const handleDeleteCurso = async () => {
    if (!cursoId) {
      // Handle error: course ID is empty
      setSnackbarSeverity("error");
      setSnackbarMessage("Por favor, insira o ID do curso para excluir.");
      setOpenSnackbar(true);
      return; // Prevent unnecessary API call
    }

    try {
      const response = await fetch(`http://localhost:8080/curso/${cursoId}`, {
        method: "DELETE",
        // Add appropriate headers (e.g., authorization) if required
      });

      if (!response.ok) {
        // Handle error: deletion failed
        setSnackbarSeverity("error");
        setSnackbarMessage("Falha ao excluir curso.");
        setOpenSnackbar(true);
        console.error("Failed to delete course:", response.statusText);
        return;
      }

      console.log("Curso excluído com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarMessage("Curso excluído com sucesso!");
      setCursoId(""); // Clear the course ID field after successful deletion
      setOpenSnackbar(true);
    } catch (error) {
      // Handle unexpected errors
      console.error("Error deleting course:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Erro ao excluir curso.");
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="ID do Curso"
          variant="outlined"
          value={cursoId}
          onChange={handleInputChange}
        />
      </Box>
      <Button variant="contained" color="error" onClick={handleDeleteCurso}>
        Excluir
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Hide Snackbar after 6 seconds
        onClose={handleSnackbarClose}
      >
        <Alert severity={snackbarSeverity} onClose={handleSnackbarClose}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
