import logger from 'logger';

export async function main(event, context) {
  return {
    statusCode: 200,
    body: `Hello user!! via ${logger()}`,
  };
}

