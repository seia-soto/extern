export type Numeric = `${number}`;

export type DateTime = `${number}-${number}-${number}T${number}:${number}:${number}.${number}+${number}`;

/** An integer value indicating seconds */
export type Seconds = number;

/** A number value between zero to one */
export type Ratio = number;

export type JsonLiteral<T = unknown> = string | T;
