import express, { type Application, type NextFunction, type Request, type Response } from 'express'

const app: Application = express()
const ports: number = 4000

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: '200', data: 'hello dunia' })
})

app.listen(ports, () => {
  console.log('server listening on port :', ports)
})
