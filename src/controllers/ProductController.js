const ProductModel = require('../models/ProductModel');

const ProductController = {
    async create(request, response) {
        let messageReturn = ''

        if (!request.body.name || !request.body.price || !request.body.user_id){
            messageReturn = 'Nome, preço e usuário são obrigatórios!'
             return response.status(400).json({
                message: messageReturn
            });
        }else {
            ProductModel.create(request.body);
            messageReturn = 'Produto criado com sucesso'
        }
        response.status(201);
        return response.json({
            message: messageReturn
        });
    },

    async update(request, response) {
        let id = request.params.id;
        
        ProductModel.update(request.body, {
            where: { id } // id: id
        });

        return response.json({
            message: "Usuario atualizado com sucesso"
        });
    },

    async list(request, response) {
        const products = await ProductModel.findAll();
        response.json(products);
    }
}

module.exports = ProductController;