import { CreateDiagnosisDto } from '../domain/dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from '../domain/dto/update-diagnosis.dto';
import { Diagnosis } from '../domain/schemas/diagnosis.schema';
import { DiagnosisRepository } from '../repository/diagnosis.repository';
export declare class DiagnosisService {
    private readonly repo;
    constructor(repo: DiagnosisRepository);
    getById(id: string): Promise<Diagnosis>;
    getList(page: number): Promise<Diagnosis[]>;
    create(dto: CreateDiagnosisDto): Promise<Diagnosis>;
    update(id: string, dto: UpdateDiagnosisDto): Promise<Diagnosis>;
    delete(id: string): Promise<Diagnosis>;
}
