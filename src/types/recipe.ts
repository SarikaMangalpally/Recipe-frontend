export type Recipe = {
    id?: ID;
    title: string;
    servings: number;
    instructions: string;
};

export type ID = {
    id: string;
}