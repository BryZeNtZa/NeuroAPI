import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from '../domain/dto/auth-credentials.dto';
import { RegisterUserDto } from '../domain/dto/register-user.dto';
import { User } from '../domain/schemas/user.schema';
import { UsersRepository } from '../repository/users.repository';
export declare class AuthService {
    private readonly usersRepository;
    private jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    token(user: User): Promise<{
        token: string;
        expires: string;
    }>;
    authenticate(credentials: AuthCredentialsDto): Promise<any>;
    register(dto: RegisterUserDto): Promise<User>;
}
