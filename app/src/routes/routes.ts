import express, { Request, Response, Router } from "express";


const router: Router = express.Router()

router.get('/', (req: Request, res: Response): void => {
    res.send('Home');
})

export default router;