"use server";
import { cookies } from "next/headers";
import { z } from "zod";

export async function userRegistrationAction(state, formData) {
  const { username, password , firstname, lastname, age, role} = Object.fromEntries(formData);
  const cookieStore = await cookies();

  // I have copyed this zod code from Din maegler project just changed token key and form input name.

  const schema = z.object({
    username: z.string().min(1, { message: "This fiels is requred" }),
    password: z
      .string()
      .min(4, { message: "Password must be at least 4 characters long" }),
      firstname: z.string().min(1, { message: "This fiels is requred" }),
      lastname: z.string().min(1, { message: "This fiels is requred" }),
      age: z.preprocess(
        (a) => parseInt(z.string().parse(a), 10),
        z.number().positive({ message: "age must be more than 5" })
      ),
      role: z.enum(["default", "instructor"])

  });

  const result = schema.safeParse({ username, password , firstname,lastname, age, role });

  if (!result.success) return result.error.format();

  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;
  try {

      await fetch(`${baseUrl}/api/v1/users`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body:`username=${username}&password=${password}&firstname=${firstname}&lastname=${lastname}&age=${age}&role=${role}`

    });

    // const data = await response.json();
    // console.log(data);
    return { success: true };
    
  } catch (error) {
    throw new Error(error);
  }
}
