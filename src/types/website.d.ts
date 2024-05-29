type Website = {
    id: string;
    documentUrlPatterns: string[];
    replaceInPathAt: number;
    languages: Language[];
}

type Language = {
    name: string;
    path: string | undefined;
}

export {
    Website,
    Language
}