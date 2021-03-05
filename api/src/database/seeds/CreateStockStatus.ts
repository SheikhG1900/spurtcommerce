import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { StockStatus } from '../../api/models/stockStatus';
export class CreateStockStatus implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {
        const em = connection.createEntityManager();
        const statusData: any = [
            {
                stockStatusId: 1,
                name: 'In Stock',
                isActive: 1,
            },
            {
                stockStatusId: 2,
                name: 'Out of the stock',
                isActive: 1,
            },
        ];
        let i = 0;
            for (i ; i < statusData.length; i++) {
                    const stockStatus = new StockStatus();
                    stockStatus.stockStatusId = statusData[i].stockStatusId;
                    stockStatus.name = statusData[i].name;
                    stockStatus.isActive = statusData[i].isActive;
                    await em.save(stockStatus);
                }
        return statusData;
    }
}
