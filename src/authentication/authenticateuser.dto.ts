import { IsString } from "class-validator";

class AuthenticateUserDto {
  @IsString()
  @IsString()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public role: string;

  @IsString()
  public isAdmin: boolean;
}

export default AuthenticateUserDto;
