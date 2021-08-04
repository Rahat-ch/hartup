import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabaseclient';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  supabase.auth.api.setAuthCookie(req, res);
}

// import type { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from '../../utils/supabaseclient';

// type Data = {
//   name: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>,
// ) {
//   res.status(200).json({ name: `John Doe` });
// }
