class Helper {
  constructor(event, project, Job) {
    this.event = event;
    this.project = project;
    this.Job = Job;
  }

  slackNotify(message) {
    var slack = new this.Job("slack-notify", "technosophos/slack-notify:latest");
  
    slack.env = {
      SLACK_WEBHOOK: this.project.secrets.SLACK_WEBHOOK,
      SLACK_USERNAME: "BrigadeBot",
      SLACK_TITLE: "Build " + this.event.buildID,
      SLACK_MESSAGE: message + " <https://" + this.project.repo.name + ">",
      SLACK_COLOR: "#00ff00"
    };
    slack.tasks = ["/slack-notify"];
  
    if (this.event.cause && this.event.cause.trigger != "success") {
      slack.env.SLACK_COLOR = "#ff0000"
    }
  
    slack.run();
  }
}

exports.Helper = Helper;

