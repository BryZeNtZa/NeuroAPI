import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Availability } from 'src/modules/common/domain/schemas/availability.schema';
import { Insurance } from 'src/modules/common/domain/schemas/insurance.schema';
import { Specialization } from 'src/modules/common/domain/schemas/specialization.schema';
import { User } from './user.schema';

export type TherapistDocument = Therapist & Document;

@Schema()
export class Therapist {
  @ApiProperty({ type: String })
  @Prop({ type: SchemaTypes.ObjectId })
  _id?: Types.ObjectId;

  @ApiProperty()
  @Prop({ unique: true, type: SchemaTypes.ObjectId, ref: User.name })
  user_id?: string;

  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: Availability.name })
  availability_id?: string;

  @ApiProperty({
    description: "Therapist's specializations",
    isArray: true,
    required: false,
    default: [],
  })
  @Prop({ type: [SchemaTypes.ObjectId], ref: Specialization.name })
  specializations?: [Specialization];

  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: Insurance.name })
  insurance_id?: string;

  @ApiProperty()
  @Prop({ default: false })
  approve?: boolean;

  @ApiProperty()
  @Prop({ default: '' })
  bio?: string;

  @ApiProperty()
  @Prop({ default: 0 })
  fee?: number;
}

export const TherapistSchema = SchemaFactory.createForClass(Therapist);
