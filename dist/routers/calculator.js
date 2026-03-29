import { Router } from "express";
export const router = Router();
router.get("/calculator/add", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const result = a + b;
    res.json({ result });
});
