import { query } from "express";
import {MigrationInterface, QueryRunner, Table, Timestamp} from "typeorm";

export class CreateTags1648576038703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tags",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "Timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "Timestamp",
                        default: "now()"
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tags");
    }

}
