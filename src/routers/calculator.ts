import { Router } from "express";

export const router = Router();

router.get("/calculator/add", (req, res) => {
    const a = parseFloat(req.query.a as string);
    const b = parseFloat(req.query.b as string);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const result = a + b;
    res.json({ result });
});

