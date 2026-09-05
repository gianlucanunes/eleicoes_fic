import { Router } from "express";
import { votos } from "../dados/votos.js";
import { candidatos } from "../dados/candidatos.js";

const votosRouter = Router()

votosRouter.get('/votos', (req, res) => {

  res.json(votos)
})

votosRouter.get('/voto/:id', (req, res) => {

  const numero = parseInt(req.params.id)
  const voto = votos.find(vot => vot.id === numero)

  const candidato = candidatos.find(cand => cand.id === numero)

  if (voto){
    res.status(200)
    // res.json(voto)
    res.json({voto, candidato})
  }
  else{
    res.status(404).json({ error : "voto não encontrado"})
  }


  
})

export default votosRouter