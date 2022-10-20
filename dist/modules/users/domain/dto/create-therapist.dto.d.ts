import { CreateUserDto } from './create-user.dto';
import { Specialization } from '@app/common/domain/schemas/specialization.schema';
export declare class CreateTherapistDto extends CreateUserDto {
    user_id?: string;
    availability_id: string;
    specializations: [Specialization];
    bio?: string;
    approve?: boolean;
    insurance_id?: string;
    fee: number;
}
