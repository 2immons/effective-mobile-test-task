const db = require('../db')

class HistoryService{
    async logUserCreation(user_id){
        const query = await db.query('INSERT INTO history(user_id, change_message) values ($1, $2) RETURNING *',
            [user_id, 'создан'])
    }

    async logUserUpdate(user_id){
        const query = await db.query('INSERT INTO history(user_id, change_message) values ($1, $2) RETURNING *',
            [user_id, 'обновлен'])
    }

    async getHistory(req, res){
        const id = req.params.id
        const history = await db.query('SELECT * FROM history WHERE user_id = $1',[id])
        res.json(history.rows)
    }
}

module.exports = new HistoryService()