/// <reference types="node" />

type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray';
interface Options {
    text?: string;
    spinner?: string | Spinner;
    color?: Color;
    interval?: number;
    stream?: NodeJS.WritableStream;
    enabled?: boolean;
}
interface Spinner {
    interval?: number;
    frames: string[];
}
interface Instance {
    start(text?: string): Instance;
    stop(): Instance;
    succeed(text?: string): Instance;
    fail(text?: string): Instance;
    warn(text?: string): Instance;
    info(text?: string): Instance;
    stopAndPersist(symbol?: string): Instance;
    clear(): Instance;
    render(): Instance;
    frame(): Instance;
    text: string;
    color: Color;
}
declare function ora(options: Options | string): Instance;
export = ora;
