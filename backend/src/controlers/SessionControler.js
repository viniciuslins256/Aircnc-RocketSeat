/*Métodos -> Index, Show, Store, Update, Destroy
    
    Index -> Método que retorna uma listagem de sessões
    Show -> Método que retorna somente uma única sessão
    Store -> Método que serve para criar uma sessão
    Update -> Método que serve para alterar uma sessão
    Destroy -> Método que serve para deletar uma sessão */

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
}