import { PORT, URL_DB } from '../common/config';
import { app as server } from '../app';
import mongoose from 'mongoose';

/**
 * Run the server!
 * Listening on a port and displaying a message in the log.
 * If error then exit process and displaying a message about error in the log.
 * @returns void
 */
const startServer = async () => {
  try {
    await mongoose.connect(URL_DB);
    server.listen(PORT, '0.0.0.0', () =>
      console.info(`App is running on ${PORT}`)
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
