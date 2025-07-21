import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import DatabaseConfig from "../database/database.config";

@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            load: [
                DatabaseConfig,
            ]
        })
    ]
})
export class ConfigModule {}
