export type Numeric<T extends number = number> = `${T}`;

export type DateTime = `${number}-${number}-${number}T${number}:${number}:${number}.${number}+${number}`;

/** An integer value indicating seconds */
export type Seconds = number;

/** A number value between zero to one */
export type Ratio = number;

/** A number value between zero to hundred */
export type Percentile = number;

/** An integer value: zero or one */
export type Bit = 0 | 1;

export type JsonLiteral<T = unknown> = string | T;
