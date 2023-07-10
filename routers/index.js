const { Router } = require("express");
const indexController = require("../controllers/index");
const LoginController = require("../controllers/Login");
const DashboardController = require("../controllers/Dashboard");
const multer = require("multer");
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
router.put("/Dashboard/Profile/:id", DashboardController.EDITProfile);

// /AboutMe/
router.get("/Dashboard/AboutMe", DashboardController.ShowAboutMe);
router.post(
  "/Dashboard/AboutMe",
  upload.single("file"),
  DashboardController.createAboutMe
);
router.put("/Dashboard/AboutMe/:id", DashboardController.EDITAboutMe);

// /Education/
router.get("/Dashboard/Education", DashboardController.ShowEducation);
router.get("/Dashboard/Education/:id", DashboardController.ShowOneEducation);
router.post("/Dashboard/Education", DashboardController.createEducation);
router.put("/Dashboard/Education/:id", DashboardController.EDITEducation);
router.delete("/Dashboard/Education/:id", DashboardController.DeletedEducation);

// /WorkHistory/
router.get("/Dashboard/WorkHistory", DashboardController.ShowWorkHistory);
router.get("/Dashboard/WorkHistory/:id", DashboardController.ShowOneWorkHistory);
router.post("/Dashboard/WorkHistory", DashboardController.createWorkHistory);
router.put("/Dashboard/WorkHistory/:id", DashboardController.EDITWorkHistory);
router.delete("/Dashboard/WorkHistory/:id", DashboardController.DeletedWorkHistory);

// /ProgrammingSkills/
router.get("/Dashboard/ProgrammingSkills", DashboardController.ShowProgrammingSkills);
router.get("/Dashboard/ProgrammingSkills/:id", DashboardController.ShowOneProgrammingSkills);
router.post("/Dashboard/ProgrammingSkills", DashboardController.createProgrammingSkills);
router.put("/Dashboard/ProgrammingSkills/:id", DashboardController.EDITProgrammingSkills);
router.delete("/Dashboard/ProgrammingSkills/:id", DashboardController.DeletedProgrammingSkills);

// /Project/
router.get("/Dashboard/Project", DashboardController.ShowProject);
router.get("/Dashboard/Project/:id", DashboardController.ShowOneProject);
router.post("/Dashboard/Project", DashboardController.createProject);
router.put("/Dashboard/Project/:id", DashboardController.EDITProject);
router.delete("/Dashboard/Project/:id", DashboardController.DeletedProject);

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
