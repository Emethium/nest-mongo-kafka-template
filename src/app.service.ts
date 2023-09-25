import { Injectable, Logger } from '@nestjs/common';
import { MongoDBService } from './core/database/mongodb.service';
import { KafkaService } from './core/event-bus/kafka.service';

@Injectable()
export class AppService {
  constructor(
    private readonly db: MongoDBService,
    private readonly eventBusService: KafkaService,
    private readonly logger: Logger,
  ) {}

  async getHello() {
    return 'Hello World!';
  }
}
