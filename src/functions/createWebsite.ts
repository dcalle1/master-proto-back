import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda"
import { middify } from "../utils/lambda"

async function main(
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> {
  try {
    const retailerId = event.pathParameters?.retailerId
    if(!retailerId) {
      console.log('missing retailer id.')
      return {
        statusCode: 500,
        body: JSON.stringify({message: 'missing retailer id.'}),
      }
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'retailer id received.', retailerId }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  }
}

export const handler = middify(main)