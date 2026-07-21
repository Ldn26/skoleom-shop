import { callController } from '@/server/http';
import controller from '@/server/controllers/avatarController';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export const GET = callController(controller.getAvatarById);
export const PUT = callController(controller.updateAvatar);
export const DELETE = callController(controller.deleteAvatar);
