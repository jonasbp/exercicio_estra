import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export function ListarCurso() {
    const [data, setData] = useState([])

  const [nome, setNome] = useState()

  useEffect(() => {
    load()
  }, [])

  function load() {
    fetch('http://localhost:8080/curso', {
      method: 'GET',
    }).then(response => {
      return response.json()
    }).then(data => {
      setData(data)
    }).catch(response => {
      alert('Erro ao listar times!')
      alert(response.status)
    })
  }

  return(
    <>
      <h1>Listar Times</h1>
      <table>
                <tbody>
                    <tr>
                    <td>Título</td>
                    <td>Professor</td>
                    <td>Nota</td>
                    <td>Status</td>
                    </tr>            
                    {
                    data.map((time, index) => {
                        return <tr key={index}>
                        <td>{time.titulo}</td>
                        <td>{time.professor}</td>
                        <td>{time.nota}</td>
                        <td>{time.status}</td>

                        </tr>
                    })

                    }
                </tbody>
            </table>
      </>
  )
}
