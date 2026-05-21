import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const AGENT_URL = process.env.AGENT_API_URL ?? 'http://localhost:8000'

/** GET /api/chat/sessions — list chat sessions for the current user */
export async function GET(req: NextRequest) {
  const userId = req.headers.get('x-user-id') ?? ''
  const res = await fetch(`${AGENT_URL}/api/sessions?user_id=${userId}`)
  const data = await res.json()
  return NextResponse.json(data)
}

/** POST /api/chat/sessions — create a new chat session */
export async function POST(req: NextRequest) {
  const userId = req.headers.get('x-user-id') ?? ''
  const body = await req.json()
  const res = await fetch(`${AGENT_URL}/api/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...body, user_id: userId }),
  })
  const data = await res.json()
  return NextResponse.json(data)
}
