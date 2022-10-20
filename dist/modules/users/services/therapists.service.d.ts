import * as mongoose from 'mongoose';
import { CreateTherapistDto } from '../domain/dto/create-therapist.dto';
import { Therapist } from '../domain/schemas/therapist.schema';
import { UsersRepository } from '../repository/users.repository';
import { TherapistsRepository } from '../repository/therapists.repository';
import { UpdateTherapistDto } from '../domain/dto/update-therapist.dto';
export declare class TherapistsService {
    private readonly usersRepository;
    private readonly therapistsRepository;
    private readonly connection;
    constructor(usersRepository: UsersRepository, therapistsRepository: TherapistsRepository, connection: mongoose.Connection);
    getById(id: string): Promise<Therapist>;
    getByUserId(id: string): Promise<Therapist>;
    getTherapists(page: number): Promise<Therapist[]>;
    create(dto: CreateTherapistDto): Promise<Therapist>;
    update(id: string, dto: UpdateTherapistDto): Promise<Therapist>;
    delete(id: string): Promise<Therapist>;
}
