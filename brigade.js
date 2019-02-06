const { events, Job}  = require("brigadier");
const { Helper } = require("/vcs/helpers");

function echoAndNotify(e, project) {
  try {
    var helper = new Helper(e, project, Job);
    helper.slackNotify(`===> ${e.type} event received!`);
  } catch (e) {
    console.log(e);
  }
}

events.on("exec", echoAndNotify);
events.on("check_suite:requested", echoAndNotify);
events.on("check_suite:rerequested", echoAndNotify);
events.on("check_run:rerequested", echoAndNotify);
