const db = require('../db');

const getNotes = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const result = await db.query(
      'SELECT * FROM trip_notes WHERE trip_id = $1',
      [tripId]
    );
    res.json({
      success: true,
      data: result.rows,
    });
  } catch (err) {
    next(err);
  }
};

const addNote = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const { content } = req.body;
    const result = await db.query(
      'INSERT INTO trip_notes (trip_id, content) VALUES ($1, $2) RETURNING *',
      [tripId, content]
    );
    res.status(201).json({
      success: true,
      data: result.rows[0],
      message: 'Note added',
    });
  } catch (err) {
    next(err);
  }
};

const updateNote = async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const { content } = req.body;
    const result = await db.query(
      'UPDATE trip_notes SET content = $1 WHERE id = $2 RETURNING *',
      [content, noteId]
    );
    res.json({
      success: true,
      data: result.rows[0],
      message: 'Note updated',
    });
  } catch (err) {
    next(err);
  }
};

const deleteNote = async (req, res, next) => {
  try {
    const { noteId } = req.params;
    await db.query('DELETE FROM trip_notes WHERE id = $1', [noteId]);
    res.json({
      success: true,
      message: 'Note deleted',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
};
