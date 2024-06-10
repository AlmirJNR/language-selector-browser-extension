type Website = {
    id: string;
    documentUrlPatterns: string[];
    replaceInPathAt: number;
    insertInPathAt?: number;
    languages: Language[];
}

type Language = {
    name: string;
    path?: string;
    locale: string[];
}

export {
    Website,
    Language
}