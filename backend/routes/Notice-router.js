const express = require('express')

const NoticeCtrl = require('../controllers/Notice-control')

const router = express.Router()

router.post('/addpost', NoticeCtrl.createNotice)
router.put('/updatepost/:id', NoticeCtrl.updateNotice)
router.delete('/deletepost/:id', NoticeCtrl.deleteNotice)
router.get('/timeline/:id', NoticeCtrl.getNoticeById)
router.get('/timeline', NoticeCtrl.getAllNotices)

module.exports = router
