import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Gender } from '../types/gender.enum';
import { Role } from '../types/role.enum';
import { Photo } from './photo.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty()
  @Prop()
  first_name: string;

  @ApiProperty()
  @Prop()
  last_name?: string;

  @ApiProperty()
  @Prop()
  username?: string;

  @ApiProperty()
  @Prop()
  password: string;

  @ApiProperty({
    description: "User's gender",
    enum: Gender,
    enumName: 'Role',
    isArray: false,
    required: false,
    default: [Gender.Unknown],
  })
  @Prop({ default: Gender.Unknown })
  gender?: Gender;

  @ApiProperty()
  @Prop()
  phone_number?: string;

  @ApiProperty()
  @Prop({ index: true, unique: true })
  email?: string;

  @ApiProperty()
  @Prop({ type: Photo })
  img?: Photo;

  @ApiProperty({
    description: "User's List of roles",
    enum: Role,
    enumName: 'Role',
    isArray: true,
    required: false,
    default: [Role.Visitor],
  })
  @Prop({ default: [Role.Visitor] })
  roles?: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
