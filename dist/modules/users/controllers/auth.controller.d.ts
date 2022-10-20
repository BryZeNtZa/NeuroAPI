import { RegisterUserDto } from '../domain/dto/register-user.dto';
import { User } from '../domain/schemas/user.schema';
import { AuthService } from '../services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    token(req: any): Promise<{
        token: string;
        expires: string;
    }>;
    register(createUserDto: RegisterUserDto): Promise<User>;
}
