
const User = require('../models/User-model')

addAdmin = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must add a admin', 
        })
    }

    const admin = new Admin(body)

    if (!admin) {
        return res.status(400).json({ success: false, error: err })
    }

    admin
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: admin.admin_id,
                message: 'Admin added!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Admin not added!',
            })
        })
}

updateAdmin = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a admin to update',
        })
    }

    Admin.findOne({ admin_id: req.params.id }, (err, admin) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Admin not found!',
            })
        }
        user.fname = body.fname,
        user.lname = body.lname,
        user.dob = body.dob,
        user.NIC = body.NIC,
        user.gender = body.gender,
        user.address = body.address

            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: admin._id,
                    message: 'Admin updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Admin not updated!',
                })
            })
    })
}

deleteAdmin = async (req, res) => {
    await Admin.findOneAndDelete({ admin_id: req.params.id }, (err, admin) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!admin) {
            return res
                .status(404)
                .json({ success: false, error: `Admin not found` })
        }

        return res.status(200).json({ success: true, data: admin })
    }).catch(err => console.log(err))
}

getAdminById = async (req, res) => {
    await Admin.findOne({admin_id: req.params.id }, (err, admin) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!admin) {
            return res
                .status(404)
                .json({ success: false, error: `Admin not found` })
        }
        return res.status(200).json({ success: true, data: admin })
    }).catch(err => console.log(err))
}

getAdmins = async (req, res) => {
    await Admin.find({}, (err, admins) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!admins.length) {
            return res
                .status(404)
                .json({ success: false, error: `Admin not found` })
        }
        return res.status(200).json({ success: true, data: admins })
    }).catch(err => console.log(err))
}

module.exports = {
    addAdmin,
    updateAdmin,
    deleteAdmin,
    getAdmins,
    getAdminById,
}