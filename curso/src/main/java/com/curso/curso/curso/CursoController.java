package com.curso.curso.curso;

import com.curso.curso.curso.DTO.EditarCursoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CursoController {
    @Autowired
    private CursoService cursoService;

    //Lista todos os cursos
    @GetMapping("/curso")
    public List<Curso> getCurso() {
        return cursoService.listarCursos();
    }

    // Editar curso
    @PostMapping("/curso/{id}")
    public Curso editarCurso(@PathVariable String id, @RequestBody EditarCursoDTO curso) {
        return cursoService.editarCurso(id, curso);
    }

    // Deletar curso
    @DeleteMapping("/curso/{id}")
    public void deletarCurso(@PathVariable String id) {
        cursoService.deletarCurso(id);
    }

    // Cadastrar curso
    @PostMapping("/curso")
    public Curso salvarCurso(@RequestBody Curso curso) {
        return cursoService.cadastrarCurso(curso);
    }


}



