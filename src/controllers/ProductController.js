const ProductModel = require('../models/ProductModel');

const ProductController = {
    async create(request, response) {
        let messageReturn = ''

        if (!request.body.name || !request.body.price){
            messageReturn = 'Nome e preço são obrigatórios!'
        }else {
            ProductModel.create(request.body);
            messageReturn = 'Produto criado com sucesso'
        }
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