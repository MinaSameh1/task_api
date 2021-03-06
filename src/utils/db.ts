import mongoose from 'mongoose'
import config from 'config'
import logger from './logger'

export async function connect(dbUri: string) {
  try {
    await mongoose.connect(dbUri)
    logger.info('Connected to DB')
  } catch (error) {
    logger.error(`Could not connect to db ${error}`)
    process.exit(1)
  }
  return mongoose
}

export async function disconnect() {
  await mongoose.connection.close()
}

export default connect
