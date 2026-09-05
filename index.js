import express from 'express'

import candidatoRouter from './src/routes/candidatoRouter.js'
import candidatoViewRouter from './src/routes/candidatoViewRouter.js'
import votosRouter from './src/routes/votosRouter.js'

import path, { join } from 'node:path'

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src', 'views'))
app.use(express.json())

// Chave base da URL
app.use('/api', candidatoRouter)
app.use('/', candidatoViewRouter)
app.use('/', votosRouter)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})