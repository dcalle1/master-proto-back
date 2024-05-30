import middy from '@middy/core'
import middyHttpErrorHandler from '@middy/http-error-handler'
import middyCors from '@middy/http-cors'
import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
  Context,
} from 'aws-lambda'

type HandlerFunction = (
  event: APIGatewayProxyEventV2,
  ctx: Context
) => Promise<APIGatewayProxyResultV2>

export function middify(handler: HandlerFunction) {
  return middy<APIGatewayProxyEventV2, APIGatewayProxyResultV2>(handler)
    .use(middyCors())
    .use(middyHttpErrorHandler())
}