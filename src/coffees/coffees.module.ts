import { CoffeeSchema, Coffee } from './entities/coffee.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Module } from '@nestjs/common';
import { EventSchema, Event } from 'src/events/entities/event.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeeSchema,
      },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
