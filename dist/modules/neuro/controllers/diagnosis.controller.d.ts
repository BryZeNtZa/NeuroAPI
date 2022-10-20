import { Diagnosis } from '../domain/schemas/diagnosis.schema';
import { CreateDiagnosisDto } from '../domain/dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from '../domain/dto/update-diagnosis.dto';
import { DiagnosisService } from '../services/diagnosis.service';
export declare class DiagnosisController {
    private readonly service;
    constructor(service: DiagnosisService);
    index(): Promise<string>;
    getDiagnosis(id: string): Promise<Diagnosis>;
    list(page: number): Promise<Diagnosis[]>;
    create(dto: CreateDiagnosisDto): Promise<Diagnosis>;
    update(id: string, dto: UpdateDiagnosisDto): Promise<Diagnosis>;
    delete(id: string): Promise<Diagnosis>;
}
