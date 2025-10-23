addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(request) {
  const url = new URL(request.url)
  const subdomain = url.hostname.split('.')[0]
  const session = subdomain || 'unknown'

  // Xây URL đích
  const dest = new URL('https://www.au8812.com')
  dest.searchParams.set('inviteCode', '97116821')
  dest.searchParams.set('regAgentJumpFlag', '1')
  dest.searchParams.set('session', session)

  // Trả về HTML redirect
  return new Response(`
    <!DOCTYPE html>
    <html lang="vi">
    <head><meta charset="UTF-8"><title>Redirecting...</title></head>
    <body style="background:#000;color:#fff;text-align:center;padding-top:40px">
      <h2>🚀 Đang chuyển hướng Mini App...</h2>
      <script>location.href='${dest.toString()}';</script>
    </body>
    </html>
  `, { headers: { 'content-type': 'text/html' } })
}