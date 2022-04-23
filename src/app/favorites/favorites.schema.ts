import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Source } from 'types/types';

export type FavoriteDocument = {
  title: string;
  source: Source;
  description: string;
  publishedAt: string;
  url: string;
} & Document;

@Schema({ collection: 'favorites' })
export class Favorite {
  @Prop({ required: true, unique: true })
  title: string;
  @Prop()
  source: Source;
  @Prop()
  description: string;
  @Prop()
  publishedAt: string;
  @Prop()
  url: string;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
