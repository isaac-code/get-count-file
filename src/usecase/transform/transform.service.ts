import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { existsSync, fsync, readFile, readFileSync } from 'fs';

@Injectable()
export class TransformService implements OnModuleInit {
    dataSource: string
    constructor(private readonly config: ConfigService) {
        this.dataSource = config.get("DATA_SOURCE");
    }

    async onModuleInit() {
        if (!existsSync(this.dataSource)) {
            throw new Error(`File path: ${this.dataSource} does not exit`)
        }
    }

    async getOccurrencyOfWord(word): Promise<{ count: number }> {
        const text = await readFileSync(this.dataSource, "utf-8");
        const textArray = text.split(" ");
        let count = 0;
        for(let text of textArray) {
            if (text.includes(word)) {
                count++;
            }
        }
        return { count: count }
    }
}
