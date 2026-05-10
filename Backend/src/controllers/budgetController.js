const db = require('../db');

const getBudget = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const result = await db.query(
      'SELECT * FROM v_budget_breakdown WHERE trip_id = $1',
      [tripId]
    );
    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (err) {
    next(err);
  }
};

const updateBudget = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const { total_budget, currency } = req.body;
    const result = await db.query(
      'INSERT INTO trip_budgets (trip_id, total_budget, currency) VALUES ($1, $2, $3) ON CONFLICT (trip_id) DO UPDATE SET total_budget = $2, currency = $3 RETURNING *',
      [tripId, total_budget, currency]
    );
    res.json({
      success: true,
      data: result.rows[0],
      message: 'Budget updated',
    });
  } catch (err) {
    next(err);
  }
};

const getBudgetAlerts = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const result = await db.query(
      'SELECT * FROM budget_day_alerts WHERE trip_id = $1',
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

module.exports = {
  getBudget,
  updateBudget,
  getBudgetAlerts,
};
