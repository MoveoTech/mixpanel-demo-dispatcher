import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { FavoritesModule } from './favorites/favorites.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    FavoritesModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false',
      { dbName: 'development' },
    ),
    ArticlesModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
