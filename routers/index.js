const { Router } = require("express");
const indexController = require("../controllers/index");
const LoginController = require("../controllers/Login");
const DashboardController = require("../controllers/Dashboard");
const multer  = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = new Router();
// /login/
router.get("/login", LoginController.getUser);
router.post("/signup", LoginController.SingupUsers);
router.post("/login", LoginController.LoginUsers);

// /Dashboard/
router.get("/Dashboard/Profile", DashboardController.ShowProfile);
router.post(
  "/Dashboard/Profile",
  upload.single("file"),
  DashboardController.createProfile
);
router.put("/Dashboard/Profile/:id",DashboardController.EDITProfile);

//* get all data
// route GET /api/
router.get("/", indexController.getUser);
//* get a data
// route GET /api/id
router.get("/:id", indexController.getUserbyID);
// * Send data to database and save
// route POST /api/
router.post("/", indexController.postUserSave);
// * Delete a data
// route DELETE /api/id
router.delete("/:id", indexController.DeleteUser);

module.exports = router;
