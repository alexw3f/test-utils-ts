import mongoose from 'mongoose';
import { TestDB } from '../src/db';

import { should } from 'chai';

should();

const testDB = new TestDB();

describe('TestDB', () => {
    before(async () => {
        await testDB.start();
    });

    after(async () => {
        await testDB.stop();
    });

    it('a client should be able to connect to the DB', async () => {
        mongoose.connection.readyState.should.eq(1);
    });

    it('should expose the api endpoint', async () => {
        const endpoint = testDB.endpoint();

        endpoint.substr(0, 10).should.eq('mongodb://');
    });
});
