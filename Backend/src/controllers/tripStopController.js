const db = require('../db');

const getStops = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const result = await db.query(
      'SELECT ts.*, c.name as city_name FROM trip_stops ts JOIN cities c ON ts.city_id = c.id WHERE ts.trip_id = $1 ORDER BY ts.order_index ASC',
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

const addStop = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const { city_id, start_date, end_date, order_index } = req.body;
    const result = await db.query(
      'INSERT INTO trip_stops (trip_id, city_id, start_date, end_date, order_index) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [tripId, city_id, start_date, end_date, order_index]
    );
    res.status(201).json({
      success: true,
      data: result.rows[0],
      message: 'Stop added to trip',
    });
  } catch (err) {
    next(err);
  }
};

const updateStop = async (req, res, next) => {
  try {
    const { stopId } = req.params;
    const { start_date, end_date, order_index } = req.body;
    const result = await db.query(
      'UPDATE trip_stops SET start_date = COALESCE($1, start_date), end_date = COALESCE($2, end_date), order_index = COALESCE($3, order_index) WHERE id = $4 RETURNING *',
      [start_date, end_date, order_index, stopId]
    );
    res.json({
      success: true,
      data: result.rows[0],
      message: 'Stop updated',
    });
  } catch (err) {
    next(err);
  }
};

const deleteStop = async (req, res, next) => {
  try {
    const { stopId } = req.params;
    await db.query('DELETE FROM trip_stops WHERE id = $1', [stopId]);
    res.json({
      success: true,
      message: 'Stop removed from trip',
    });
  } catch (err) {
    next(err);
  }
};

const addActivityToStop = async (req, res, next) => {
  try {
    const { stopId } = req.params;
    const { activity_id, planned_time, notes } = req.body;
    const result = await db.query(
      'INSERT INTO stop_activities (stop_id, activity_id, planned_time, notes) VALUES ($1, $2, $3, $4) RETURNING *',
      [stopId, activity_id, planned_time, notes]
    );
    res.status(201).json({
      success: true,
      data: result.rows[0],
      message: 'Activity added to stop',
    });
  } catch (err) {
    next(err);
  }
};

const deleteActivityFromStop = async (req, res, next) => {
  try {
    const { stopId, activityId } = req.params;
    await db.query(
      'DELETE FROM stop_activities WHERE stop_id = $1 AND activity_id = $2',
      [stopId, activityId]
    );
    res.json({
      success: true,
      message: 'Activity removed from stop',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getStops,
  addStop,
  updateStop,
  deleteStop,
  addActivityToStop,
  deleteActivityFromStop,
};
