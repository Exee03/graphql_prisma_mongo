// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//     await prisma.post.update({
//       where: {
//         slug: 'my-first-post',
//       },
//       data: {
//         comments: {
//           createMany: {
//             data: [
//               { comment: 'Great post!' },
//               { comment: "Can't wait to read more!" },
//             ],
//           },
//         },
//       },
//     })
//     const posts = await prisma.post.findMany({
//       include: {
//         comments: true,
//       },
//     })
  
//     console.dir(posts, { depth: Infinity })
//   }

// main()
//     .catch((e) => {
//         throw e
//     })
//     .finally(async () => {
//         await prisma.$disconnect()
//     })

import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { context } from './context'

const server = new ApolloServer({
  schema: schema,
  context: context,
})

server.listen().then(async ({ url }) => {
  console.log(`\
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
  `)
})