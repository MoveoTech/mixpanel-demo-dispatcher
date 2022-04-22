import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesModule } from './favorites/favorites.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    FavoritesModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
