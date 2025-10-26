import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: "us3",
  useTLS: true,
});

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_KEY!,
  {
    cluster: "us3",
  }
);

// declare global {
//   var pusherServer: PusherServer | undefined;
//   var pusherClient: PusherClient | undefined;
// }

// export const pusherServer =
//   global.pusherServer ||
//   new PusherServer({
//     appId: process.env.PUSHER_APP_ID!,
//     key: process.env.PUSHER_KEY!,
//     secret: process.env.PUSHER_SECRET!,
//     cluster: process.env.PUSHER_CLUSTER!,
//     useTLS: true,
//   });

// export const pusherClient =
//   global.pusherClient ||
//   new PusherClient(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
//     cluster: process.env.PUSHER_CLUSTER!,
//   });
