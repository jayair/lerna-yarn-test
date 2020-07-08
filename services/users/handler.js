import AWS from "aws-sdk";
import logger from "logger";
import number from "../../lib/common";

AWS.config.update({ region: "us-east-1" });

export async function main(event, context) {
  return {
    statusCode: 200,
    body: `Hello user #${number()} via ${logger()}`,
  };
}

