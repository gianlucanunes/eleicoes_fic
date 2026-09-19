import { Router } from "express";
import { Eleicao } from "../dominio/Eleicao.js";
import { exigirLogin } from "../middlewares/exigirLogin.js";

const painelRouter = Router()

painelRouter.get('/', exigirLogin, (req, res) => {
    const eleicao = new Eleicao()
    res.render('painel', {
        titulo: 'Controle ADMIN',
        usuario: req.session.usuarioLogado,
        relatorio: eleicao.apurarVotos()
    })
})

painelRouter.post('/cad-candidato', exigirLogin, (req, res) => {
    const { nome, numero } = req.body
    const eleicao = new Eleicao()
    // faça o que estã nesse bloco
    try{
        eleicao.cadastrar(nome, numero)
    }
    // se acontecer algum problema, faça o que estiver nesse bloco
    catch(e){
        console.error(e)
    }
})

export default painelRouter