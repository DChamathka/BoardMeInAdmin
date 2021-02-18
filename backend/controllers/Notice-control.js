
const Notice = require('../models/Notice-model')

createNotice = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a notice', 
        })
    }

    const notice = new Notice(body)

    if (!notice) {
        return res.status(400).json({ success: false, error: err })
    }

    notice
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: notice.notice_id,
                message: 'Notice created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Notice not created!',
            })
        })
}

updateNotice = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Notice.findOne({ notice_id: req.params.id }, (err, notice) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Notice not found!',
            })
        }
        notice.Discription = body.discription
        notice.imgUrl = file.imgUrl
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: notice._id,
                    message: 'Notice updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Notice not updated!',
                })
            })
    })
}

deleteNotice = async (req, res) => {
    await Notice.findOneAndDelete({ notice_id: req.params.id }, (err, notice) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!notice) {
            return res
                .status(404)
                .json({ success: false, error: `Notice not found` })
        }

        return res.status(200).json({ success: true, data: notice })
    }).catch(err => console.log(err))
}

getNoticeById = async (req, res) => {
    await Notice.findOne({notice_id: req.params.id }, (err, notice) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!notice) {
            return res
                .status(404)
                .json({ success: false, error: `Notice not found` })
        }
        return res.status(200).json({ success: true, data: notice })
    }).catch(err => console.log(err))
}

getAllNotices = async (req, res) => {
    await Notice.find({}, (err, notice) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!notice.length) {
            return res
                .status(404)
                .json({ success: false, error: `Notice not found` })
        }
        return res.status(200).json({ success: true, data: notice })
    }).catch(err => console.log(err))
}

module.exports = {
    createNotice,
    updateNotice,
    deleteNotice,
    getAllNotices,
    getNoticeById,
}