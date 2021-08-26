/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-06-27 00:21:42
 */
export declare function isPrimitive(value: any): boolean;
export declare function toJSON(data: any, recursive?: boolean): any;
export declare function parseCycle(input: object, map?: Map<object, string[]>, prefix?: string): [any, string[]][];
