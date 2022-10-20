import { CreateUserDto } from './create-user.dto';
import { Types } from 'mongoose';
export declare class CreatePatientDto extends CreateUserDto {
    user_id?: Types.ObjectId;
    age: number;
}
