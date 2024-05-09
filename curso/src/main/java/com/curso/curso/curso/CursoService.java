package com.curso.curso.curso;

import com.curso.curso.curso.DTO.EditarCursoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class CursoService {
    @Autowired
    private CursoRepository cursoRepository;

    // Listar todos os cursos sem filtro
    public List<Curso> listarCursos() {
            return cursoRepository.findAll();
       }
    public Curso editarCurso(String id, EditarCursoDTO curso) {
        Curso cursoEditado = cursoRepository.findById(Integer.valueOf(id)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        cursoEditado.setNota(curso.getNota());
        cursoEditado.setStatus(curso.getStatus());
        cursoRepository.save(cursoEditado);
        return cursoEditado;
    }
    public void deletarCurso(String id) {
           // Só pode apagar se o status do curso for indisponivel
        Curso curso = cursoRepository.findById(Integer.valueOf(id)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        if (curso.getStatus().equals("INDISPONIVEL")) {
            cursoRepository.deleteById(Integer.valueOf(id));
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }
    public Curso cadastrarCurso(Curso curso) {
        return cursoRepository.save(curso);
    }
    public Curso getCursoId(String id) {
        return cursoRepository.findById(Integer.valueOf(id)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }



}
