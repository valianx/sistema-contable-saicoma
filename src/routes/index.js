const express = require("express");
const router = express.Router();

router.post("github", () => {
  try {
    exec(
      `cd ${__dirname} && git pull origin master`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );

    return res.status(200).json("ok");
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
});

module.exports = router;