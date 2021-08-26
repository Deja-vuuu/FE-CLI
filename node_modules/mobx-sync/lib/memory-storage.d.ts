/*!
 *
 * Copyright 2018 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2018-02-04 17:27:30
 * @version 1.0.0
 * @desc memory-storage.ts
 */
import { SyncStorage } from './sync';
export declare class MemoryStorage implements SyncStorage {
    debug: boolean;
    private data;
    constructor(debug?: boolean);
    getItem(key: string): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}
