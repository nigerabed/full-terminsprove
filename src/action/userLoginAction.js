"use server";
import { cookies } from "next/headers";
import { z } from "zod";

export async function userLoginAction(state, formData) {
  const { username, password } = Object.fromEntries(formData);
  const cookieStore = await cookies();

  // I have copyed this zod code from Din maegler project just changed token key and form input name.

  const schema = z.object({
    username: z.string().min(1, { message: "This fiels is requred" }),
    password: z
      .string()
      .min(4, { message: "Password must be at least 4 characters long" }),
  });

  const result = schema.safeParse({ username, password });

  if (!result.success) return result.error.format();

  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;
  try {

    const response = await fetch(`${baseUrl}/auth/token`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    cookieStore.set("landrup_token", data.token, { maxAge: 60  });
    cookieStore.set("landrup_userid", data.userId, { maxAge: 60  });
    cookieStore.set("landrup_role", data.role,{ maxAge: 60  });
    return { success: true };
    
  } catch (error) {
    throw new Error(error);
  }
}
