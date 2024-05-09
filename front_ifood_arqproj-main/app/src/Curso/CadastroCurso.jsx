import { Fragment, useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, IconButton, Snackbar } from '@mui/material';



export function CadastroCurso() {

    const [titulo, setTitulo] = useState()
    const [professor, setProfessor] = useState()
    const [nota, setNota] = useState()
    const [status, setStatus] = useState()

    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    const action = (
        <Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
          </IconButton>
        </Fragment>
      );

    function click() {
        let data = {
          'titulo': titulo,
          'professor': professor,
          'nota': nota,
          'status': status
        }
    
        fetch('http://localhost:8080/curso', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
            if (!response.ok) {
                // error processing
                throw 'Error';
            }
          setOpen(true)
          setMessage("Curso cadastrado com sucesso")
          //load()
        }).catch(response => {
            setOpen(true)
            setMessage('Erro no cadastro do curso!')
        })
    }

  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
            <h1>Cadastre o curso:</h1>
        </div>
      <div>
        <TextField
          value={titulo} onChange={e => setTitulo(e.target.value)}
          required
          id="outlined-required"
          label="Título:"
        />
        <TextField
          value={professor} onChange={e => setProfessor(e.target.value)}
          required
          id="outlined-required"
          label="Professor:"
        />
       <TextField
          value={nota} onChange={e => setNota(e.target.value)}
          required
          id="outlined-required"
          label="Nota:"
        />
         <TextField
          value={status} onChange={e => setStatus(e.target.value)}
          required
          id="outlined-required"
          label="Status:"
        />
      </div>
      <Button variant="outlined" onClick={() => click()}>Cadastrar</Button>
      <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={message}
            action={action}
        ></Snackbar>
    </Box>
  );
}