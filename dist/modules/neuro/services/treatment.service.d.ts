import { Treatment } from '../domain/schemas/treatment.schema';
import { CreateTreatmentDto } from '../domain/dto/create-treatment.dto';
import { UpdateTreatmentDto } from '../domain/dto/update-treatment.dto';
import { TreatmentRepository } from '../repository/treatment.repository';
export declare class TreatmentService {
    private readonly repo;
    constructor(repo: TreatmentRepository);
    getById(id: string): Promise<Treatment>;
    getList(page: number): Promise<Treatment[]>;
    create(dto: CreateTreatmentDto): Promise<Treatment>;
    update(id: string, dto: UpdateTreatmentDto): Promise<Treatment>;
    delete(id: string): Promise<Treatment>;
}
