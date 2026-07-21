import { callController } from '@/server/http';
import controller from '@/server/controllers/productController';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export const GET = callController(controller.getVariation);
export const PATCH = callController(controller.updateVariation);
export const DELETE = callController(controller.deleteVariation);
