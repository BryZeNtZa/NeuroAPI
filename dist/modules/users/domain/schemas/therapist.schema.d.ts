/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types } from 'mongoose';
import { Specialization } from 'src/modules/common/domain/schemas/specialization.schema';
export declare type TherapistDocument = Therapist & Document;
export declare class Therapist {
    _id?: Types.ObjectId;
    user_id?: string;
    availability_id?: string;
    specializations?: [Specialization];
    insurance_id?: string;
    approve?: boolean;
    bio?: string;
    fee?: number;
}
export declare const TherapistSchema: import("mongoose").Schema<Therapist, import("mongoose").Model<Therapist, any, any, any, any>, {}, {}, {}, {}, "type", Therapist>;
