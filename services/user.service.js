const db = require('../db')
const historyService = require('../services/history.service.js')

class UserService{
    async createUser(req, res){
        const {name, email, password} = req.body
        const newUser = await db.query('INSERT INTO users(name, email, password) values ($1, $2, $3) RETURNING *',
            [name, email, password])
        res.json(newUser.rows[0])
        historyService.logUserCreation(newUser.rows[0].id);
    }

    async getUsers(req, res){
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }

    async updateUser(req, res){
        const {id, name, email, password} = req.body
        const updatedUser = await db.query('UPDATE users set name = $1, email= $2, password = $3 where id = $4 RETURNING *',
            [name, email, password, id])
        res.json(updatedUser.rows[0])
        historyService.logUserUpdate(updatedUser.rows[0].id);
    }
}

module.exports = new UserService()