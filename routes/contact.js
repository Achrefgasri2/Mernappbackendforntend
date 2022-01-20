// 1-require express
const express = require('express')
// 2- require Router
const router = express.Router()
// 3- require model
const Contact = require('../model/Contact')
// 4- require controllers
const controllers = require('../controllers/contact.controllers')
/**
 * @desc : add new contact
 * @method : POST
 * @path : 'http://localhost:6000/api/contacts/'
 * @data : req.body
 */
router.post('/' , controllers.addContact )
   /**
 * @desc : get all contacts
 * @method : GET
 * @path : 'http://localhost:6000/api/contacts/'
 * @data : no
 */
router.get('/', controllers.getContacts)
   /**
 * @desc : delete one contact
 * @method : DELETE
 * @path : 'http://localhost:6000/api/contacts/:id'
 * @data : req.params
 */
router.delete('/:id', controllers.deleteContact)
  /**
 * @desc : get one contact by id
 * @method : GET
 * @path : 'http://localhost:6000/api/contacts/:_id'
 * @data : req.params
 */
   router.get('/:_id', controllers.getContact)
 /**
 * @desc : update one contact by id
 * @method : PUT
 * @path : 'http://localhost:6000/api/contacts/:_id'
 * @data : req.params and req.body
 */
  router.put('/:_id', controllers.updateContact)
    
module.exports= router