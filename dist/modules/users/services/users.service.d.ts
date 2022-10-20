import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';
import { User } from '../domain/schemas/user.schema';
import { UsersRepository } from '../repository/users.repository';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUserById(id: string): Promise<User>;
    getUsers(page: number): Promise<User[]>;
    create(dto: CreateUserDto): Promise<User>;
    update(id: string, dto: UpdateUserDto): Promise<User>;
    delete(id: string): Promise<User>;
}
