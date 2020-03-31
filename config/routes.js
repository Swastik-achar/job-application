const express= require("express")
const router= express.Router()

const applicationController= require('../app/controllers/applicationController')

router.get("/users/application-forms", applicationController.list)
router.post("/users/application-form", applicationController.register)
router.put("/users/application-form/update/:id", applicationController.update)

module.exports= router