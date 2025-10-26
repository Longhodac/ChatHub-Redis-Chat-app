# Redis Chat Application

Demo:
https://fast-chat-lake.vercel.app/

A real-time chat application built with Next.js 14, Redis, Pusher, and Cloudinary. Features include real-time messaging, image sharing, and user authentication via Kinde.

## Features

- 🔐 Authentication with Kinde
- 💬 Real-time messaging using Pusher
- 📸 Image upload and sharing via Cloudinary
- 📊 Message persistence with Redis
- 🎨 Dark/Light mode support
- 🔊 Sound effects for messages and typing
- 😊 Emoji picker integration
- 👍 Quick reactions

## Tech Stack

- **Framework**: Next.js 14
- **Database**: Redis (via Upstash)
- **Real-time**: Pusher
- **Authentication**: Kinde Auth
- **Styling**: Tailwind CSS
- **Media Storage**: Cloudinary
- **State Management**: TanStack Query

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A Redis database (Upstash recommended)
- Pusher account
- Cloudinary account
- Kinde Auth account

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Kinde Auth Configuration
KINDE_CLIENT_ID=your_client_id
KINDE_CLIENT_SECRET=your_client_secret
KINDE_ISSUER_URL=your_issuer_url
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/auth/callback

# Redis Configuration
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Pusher Configuration
PUSHER_APP_ID=your_app_id
PUSHER_KEY=your_key
PUSHER_SECRET=your_secret
PUSHER_CLUSTER=your_cluster

NEXT_PUBLIC_PUSHER_KEY=your_key
NEXT_PUBLIC_PUSHER_CLUSTER=your_cluster
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Longhodac/ChatHub-Redis-Chat-app.git
cd redis-chat
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables as shown above

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/actions` - Server actions for message handling
- `/src/app` - Next.js app router pages and layouts
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions and configurations
- `/src/store` - Client-side state management
- `/public` - Static assets and sounds

## Features in Detail

### Real-time Messaging

- Messages are persisted in Redis
- Real-time updates via Pusher
- Typing indicators and message sounds
- Support for text and image messages

### User Interface

- Responsive design
- Dark/Light mode toggle
- Sound effects (can be toggled)
- Emoji picker integration
- Image preview before sending

### Authentication

- Secure authentication via Kinde
- Protected routes and API endpoints
- Persistent user sessions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Redis](https://redis.io/)
- [Pusher](https://pusher.com/)
- [Cloudinary](https://cloudinary.com/)
- [Kinde](https://kinde.com/)
- [TanStack Query](https://tanstack.com/query/)
