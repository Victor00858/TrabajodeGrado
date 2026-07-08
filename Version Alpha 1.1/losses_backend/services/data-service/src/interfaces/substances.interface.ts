export interface ISubstance {
    id: number;
    name?: string;
    A?: number;
    B?: number;
    pm_vapor?: number;
    pm_liquid?: number;
    Kc?: number;
    created_at: Date;
    updated_at?: Date;
    substance_groups_id: number;
}