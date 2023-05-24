import { ArrayNotEmpty, ArrayUnique, IsArray, IsNotEmpty, IsUUID } from "class-validator";

export class UpdateAllUnseenNotificationDto {
    @ArrayUnique((element) => element)
    @IsUUID('all', { each: true })
    @IsArray()
    @IsNotEmpty({ each: true })
    @ArrayNotEmpty()
    readonly notifications_ids: string[]
}
