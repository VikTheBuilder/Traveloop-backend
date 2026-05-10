const db = require('../db');

const getMe = async (req, res, next) => {
  try {
    const result = await db.query(
      'SELECT id, email, full_name, photo_url, language, is_admin, created_at FROM users WHERE id = $1',
      [req.user.id]
    );
    res.json({
      success: true,
      data: user = result.rows[0],
    });
  } catch (err) {
    next(err);
  }
};

const updateMe = async (req, res, next) => {
  try {
    const { full_name, language } = req.body;
    let photo_url = req.body.photo_url;

    if (req.file) {
      photo_url = `/uploads/${req.file.filename}`;
    }

    const result = await db.query(
      'UPDATE users SET full_name = COALESCE($1, full_name), language = COALESCE($2, language), photo_url = COALESCE($3, photo_url) WHERE id = $4 RETURNING id, email, full_name, photo_url, language',
      [full_name, language, photo_url, req.user.id]
    );

    res.json({
      success: true,
      data: result.rows[0],
      message: 'Profile updated successfully',
    });
  } catch (err) {
    next(err);
  }
};

const deleteMe = async (req, res, next) => {
  try {
    await db.query('DELETE FROM users WHERE id = $1', [req.user.id]);
    res.json({
      success: true,
      message: 'Account deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};

const getSavedDestinations = async (req, res, next) => {
  try {
    const result = await db.query(
      'SELECT sd.*, c.name as city_name, c.country FROM saved_destinations sd JOIN cities c ON sd.city_id = c.id WHERE sd.user_id = $1',
      [req.user.id]
    );
    res.json({
      success: true,
      data: result.rows,
    });
  } catch (err) {
    next(err);
  }
};

const addSavedDestination = async (req, res, next) => {
  try {
    const { city_id } = req.body;
    const result = await db.query(
      'INSERT INTO saved_destinations (user_id, city_id) VALUES ($1, $2) RETURNING *',
      [req.user.id, city_id]
    );
    res.status(201).json({
      success: true,
      data: result.rows[0],
      message: 'Destination saved',
    });
  } catch (err) {
    next(err);
  }
};

const deleteSavedDestination = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.query('DELETE FROM saved_destinations WHERE id = $1 AND user_id = $2', [id, req.user.id]);
    res.json({
      success: true,
      message: 'Destination removed from saved',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getMe,
  updateMe,
  deleteMe,
  getSavedDestinations,
  addSavedDestination,
  deleteSavedDestination,
};
