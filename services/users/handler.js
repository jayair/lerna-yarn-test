import AWS from "aws-sdk";
import _ from "underscore";
import logger from "logger";
import numbers from "../../lib/common";

AWS.config.update({ region: "us-east-1" });

export async function main(event, context) {
  return {
    statusCode: 200,
    body: `Hello user #${_.first(numbers())} via ${logger()}`,
  };
}

