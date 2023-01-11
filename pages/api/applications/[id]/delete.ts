import type { NextApiRequest, NextApiResponse } from "next";
import { applications, setApplications } from "../../hello";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      let { page = "1", limit = "10000" }: any = req.query;
      page = parseInt(page);
      limit = parseInt(limit);
      try {
        return res.status(200).json({
          page,
        });
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    }
    case "POST": {
      try {
        return res.status(201).json({});
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
        break;
      }
    }
    case "DELETE": {
      try {
        const id = req.query.id;
        console.log("id is  ", id);
        let deletedApp = null;
        const apps = applications.filter((app: any) => {
          if (app.uid === id) {
            deletedApp = app;
            return false;
          }
          return true;
        });
        setApplications(apps);
        return res.status(201).json(deletedApp);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
        break;
      }
    }

    default: {
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
