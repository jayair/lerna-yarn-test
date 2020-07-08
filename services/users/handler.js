import logger from 'logger';

export function main(event, context) {
  return {
    statusCode: 200,
    body: `Hello user!! via ${logger()}`,
  };
}

