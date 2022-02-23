const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const { models } = require('./../libs/sequelize');
class CustomerService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.user.password, 10);
    data.user.password = hash;

    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    });
    console.log(newCustomer);

    delete newCustomer.dataValues.user.dataValues.password;
    return newCustomer;
  }

  async find() {
    const response = await models.Customer.findAll({
      include: ['user']
    });

    return response;
  }

  async findOne(id) {
    const Customer = await models.Customer.findByPk(id);

    if(!Customer) {
      throw boom.notFound('Customer not found');
    }

    return Customer;
  }

  async update(id, changes) {
    const Customer = await this.findOne(id);
    const response = Customer.update(changes);
    return response;
  }

  async delete(id) {
    const Customer = await this.findOne(id);
    await Customer.destroy();

    return { id };
  }
}

module.exports = CustomerService;
