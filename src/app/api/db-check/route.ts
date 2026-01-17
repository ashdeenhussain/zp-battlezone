import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        // Try to connect and count users (even if 0, it means connection worked)
        const userCount = await prisma.user.count();

        return NextResponse.json({
            status: 'success',
            message: 'Database Connected Successfully! 🟢',
            userCount: userCount
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: 'Database Connection Failed 🔴',
            error: String(error)
        }, { status: 500 });
    }
}
