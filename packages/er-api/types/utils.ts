export type Numeric = `${number}`;

export type DateTime = `${number}-${number}-${number}T${number}:${number}:${number}.${number}+${number}`;

export type Seconds = number;

export type JsonLiteral<T = unknown> = string | T;
