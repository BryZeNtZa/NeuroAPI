import * as mongoose from 'mongoose';
import { CreatePatientDto } from '../domain/dto/create-patient.dto';
import { Patient } from '../domain/schemas/patient.schema';
import { UsersRepository } from '../repository/users.repository';
import { PatientsRepository } from '../repository/patients.repository';
import { UpdatePatientDto } from '../domain/dto/update-patient.dto';
export declare class PatientsService {
    private readonly usersRepository;
    private readonly patientsRepository;
    private readonly connection;
    constructor(usersRepository: UsersRepository, patientsRepository: PatientsRepository, connection: mongoose.Connection);
    getById(id: string): Promise<Patient>;
    getByUserId(id: string): Promise<Patient>;
    getPatients(page: number): Promise<Patient[]>;
    create(dto: CreatePatientDto): Promise<Patient>;
    update(id: string, dto: UpdatePatientDto): Promise<Patient>;
    delete(id: string): Promise<Patient>;
}
