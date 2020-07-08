import AWS from "aws-sdk";
import _ from "underscore";
import logger from "logger";
import number from "../../lib/common";

_.first([1,2]);

AWS.config.update({ region: "us-east-1" });

export async function main(event, context) {
  return {
    statusCode: 200,
    body: `Hello user #${number()} via ${logger()}`,
  };
}

