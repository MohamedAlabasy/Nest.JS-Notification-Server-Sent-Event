import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateNotificationsDto {
    @IsString()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    readonly description: string;
}
