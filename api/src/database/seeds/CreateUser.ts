import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../../api/models/User';
export class CreateUser implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {
        const em = connection.createEntityManager();
        const user = new User();
        user.userId = 1;
        user.username = 'admin@spurtcart.com';
        user.password = await User.hashPassword('cart123@');
        user.email = 'admin@spurtcart.com';
        user.userGroupId = 1;
        em.save(user);
    }
}
