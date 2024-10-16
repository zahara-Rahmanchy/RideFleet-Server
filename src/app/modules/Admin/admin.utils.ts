import * as bcrypt from "bcrypt";
// import config from '../../../config';

export const hashedPassword = async (
  password: string | number
): Promise<string> => {
  try {
    const hashedPassword: string = await bcrypt.hash(
      String(password),
      Number(process.env.SALT_ROUNDs)
    );
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing password");
  }
};
