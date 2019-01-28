const { events, Job}  = require("brigadier");
const { Helper } = require("/vcs/helpers");

events.on("exec", (e, project) => {
  try {
    var helper = new Helper(e, project, Job);
    helper.slackNotify("===> exec event received!");
  } catch (e) {
    console.log(e);
  }
})
