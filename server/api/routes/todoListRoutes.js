'use strict';
var router = require('express').Router();
//let router_event = require('express').Router();
var todoList = require('../controllers/todoListController');
var todoListEvent = require('../controllers/todoListEventController');
var todoListTeach = require('../controllers/todoListTeachController');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

 // todoList Routes
router.route('/news')
 .get(todoList.list_all_tasks)
 .post(todoList.create_a_task);


router.route('/news/:newsId')
 .get(todoList.read_a_task)
 .put(todoList.update_a_task)
 .delete(todoList.delete_a_task);

 router.route('/event')
 .get(todoListEvent.list_all_event)
 .post(todoListEvent.create_a_event);
 
 
 router.route('/event/:eventId')
 .get(todoListEvent.read_a_event)
 .put(todoListEvent.update_a_event)
 .delete(todoListEvent.delete_a_event);

 router.route('/teach')
 .get(todoListTeach.list_all_teach)
 .post(todoListTeach.create_a_teach);
 
 
 router.route('/teach/:teachId')
 .get(todoListTeach.read_a_teach)
 .put(todoListTeach.update_a_teach)
 .delete(todoListTeach.delete_a_teach);

 
 
 module.exports = router;