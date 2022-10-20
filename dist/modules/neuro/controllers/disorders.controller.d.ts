import { Disorder } from '../domain/schemas/disorder.schema';
import { CreateDisorderDto } from '../domain/dto/create-disorder.dto';
import { UpdateDisorderDto } from '../domain/dto/update-disorder.dto';
import { DisordersService } from '../services/disorders.service';
export declare class DisordersController {
    private readonly service;
    constructor(service: DisordersService);
    index(): Promise<string>;
    getDisorders(id: string): Promise<Disorder>;
    list(page: number): Promise<Disorder[]>;
    create(dto: CreateDisorderDto): Promise<Disorder>;
    update(id: string, dto: UpdateDisorderDto): Promise<Disorder>;
    delete(id: string): Promise<Disorder>;
}
