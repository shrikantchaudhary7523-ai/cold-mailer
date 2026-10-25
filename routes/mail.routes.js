import express from "express"
import {authMiddleware} from "../middleware/auth.middleware.js";
import { generateEmails ,getEmailById,deleteEmail,sendMail} from "../controller/mail.controller.js";
const router = express.Router();
router.post('/generate', authMiddleware,generateEmails);
router.get('/',authMiddleware, getEmailById);
    router.get('/:id', authMiddleware,generateEmails);
    router.get('/generate', authMiddleware,generateEmails);
    router.get('/generate/:id', authMiddleware,deleteEmail);
    router.post('/generate/:id', authMiddleware,sendMail);

    export default router;
