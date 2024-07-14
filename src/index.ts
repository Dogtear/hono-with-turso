import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import dotenv from 'dotenv'

dotenv.config()

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = Number(process.env.PORT)
serve({ fetch: app.fetch, port })
