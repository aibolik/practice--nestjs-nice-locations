import { Module } from '@nestjs/common';
import { LocationController } from './location/location.controller';
import { LocationModule } from './location/location.module';

@Module({
  imports: [LocationModule],
  controllers: [LocationController],
})
export class AppModule {}
