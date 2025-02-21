const express = require('express');
const authMiddlewere = require('../middlewhere/authMiddlewere')
const admincontroller = require('../control/admin.control');
const AdminMiddlewere = require('../middlewhere/adminMiddlewere')
const adminrouter = express.Router();
adminrouter.route('/users').get(authMiddlewere,AdminMiddlewere,admincontroller.allgetusers)
adminrouter.route('/users/delete/:id').delete(authMiddlewere,AdminMiddlewere,admincontroller.deleteuserbyID)
adminrouter.route('/users/:id/edit').get(authMiddlewere,AdminMiddlewere,admincontroller.getuserbyID)
adminrouter.route('/users/update/:id').patch(authMiddlewere,AdminMiddlewere,admincontroller.updateuserbyID)

adminrouter.route('/contacts').get(authMiddlewere,AdminMiddlewere,admincontroller.allgetcontacts)
adminrouter.route('/contacts/delete/:id').delete(authMiddlewere,AdminMiddlewere,admincontroller.deleteContactbyID)
adminrouter.route('/contacts/:id/edit').get(authMiddlewere,AdminMiddlewere,admincontroller.getContactbyID)
adminrouter.route('/contacts/update/:id').patch(authMiddlewere,AdminMiddlewere,admincontroller.updateContactsbyID)

module.exports=adminrouter