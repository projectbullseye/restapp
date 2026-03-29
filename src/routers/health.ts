import { Router } from "express";

export const router = Router();

router.get("/health/healthcheck", (req, res) => {
    //throw new Error("Simulated error for testing error handling");
    res.status(200).json({ status: "OK" });
});

