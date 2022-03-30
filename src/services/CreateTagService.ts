import { getCustomRepository } from "typeorm";
import { TagsRepositores } from "../repositories/TagsRepositories";


class CreateTagService {
    async execute(name: string) {
        if(!name) {
            throw new Error("The field name is required");
        }
        
        const tagsRepositories = getCustomRepository(TagsRepositores);
        
        const tagsExists = await tagsRepositories.findOne({
            name,
        });

        if(tagsExists) {
            throw new Error("This tag already exists");
        }

        const tag = tagsRepositories.create({
            name,
        });

        await tagsRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService }