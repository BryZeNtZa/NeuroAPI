import { Treatment } from '../domain/schemas/treatment.schema';
import { CreateTreatmentDto } from '../domain/dto/create-treatment.dto';
import { UpdateTreatmentDto } from '../domain/dto/update-treatment.dto';
import { TreatmentService } from '../services/treatment.service';
export declare class TreatmentController {
    private readonly service;
    constructor(service: TreatmentService);
    index(): Promise<string>;
    getTreatment(id: string): Promise<Treatment>;
    list(page: number): Promise<Treatment[]>;
    create(dto: CreateTreatmentDto): Promise<Treatment>;
    update(id: string, dto: UpdateTreatmentDto): Promise<Treatment>;
    delete(id: string): Promise<Treatment>;
}
