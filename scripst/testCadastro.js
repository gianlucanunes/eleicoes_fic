import { Eleicao } from "../src/dominio/Eleicao.js";

const eleicao = new Eleicao()

eleicao.cadastrar("tocka", 66)
eleicao.cadastrar("joao", 67)
eleicao.cadastrar("maria", 68)

console.log(eleicao.listarCandidatos())

eleicao.votar(66)
eleicao.votar(66)
eleicao.votar(67)
eleicao.votar(68)
eleicao.votar(68)
eleicao.votar(68)

console.log(eleicao.apurarVotos())