import { pool } from "../db.js";

export const getSensor = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const per_page = parseInt(req.query.per_page);
    const offset = (page - 1) * per_page;

    const [rows] = await pool.query("SELECT * FROM sensor LIMIT ?, ?", [
      offset,
      per_page,
    ]);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createSensor = async (req, res) => {
  try {
    const { date, dato, comentario } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO sensor (date, dato, comentario) VALUES (?, ?, ?)",
      [date, dato, comentario]
    );
    res.status(201).json({ id: rows.insertId, name, salary });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
