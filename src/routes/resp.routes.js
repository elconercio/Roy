import { Router } from 'express'
import { createResp }  from '../controllers/royGpt.controllers.js'

const router = Router()

router.post('/resp', createResp)

export default router