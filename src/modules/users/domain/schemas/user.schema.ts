import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Gender } from '../types/gender.enum';
import { Role } from '../types/role.enum';
import { Photo } from './photo.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  first_name: string;

  @Prop()
  last_name?: string;

  @Prop()
  username?: string;

  @Prop()
  password: string;

  @Prop({ default: Gender.Unknown })
  gender?: Gender;

  @Prop()
  phone_number?: string;

  @Prop({ index: true, unique: true })
  email?: string;

  @Prop({ type: Photo })
  img?: Photo;

  @Prop({ default: [Role.Visitor] })
  roles?: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
