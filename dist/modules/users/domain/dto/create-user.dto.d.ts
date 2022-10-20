import { RegisterUserDto } from './register-user.dto';
import { Gender } from '../types/gender.enum';
import { Role } from '../types/role.enum';
export declare class CreateUserDto extends RegisterUserDto {
    gender?: Gender;
    phone_number?: string;
    roles?: Role[];
}
