import { Router } from 'express'
import { createResp, getIndex }  from '../controllers/royGpt.controllers.js'

const router = Router()

router.get('/', getIndex)
router.post('/resp', createResp)

export default router