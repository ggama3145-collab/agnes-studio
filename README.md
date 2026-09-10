# Agnes Studio PRO

A Next.js private workspace for Agnes AI image/video generation.

## Current features
- Image Lab: `agnes-image-2.1-flash`, `agnes-image-2.0-flash`
- Text-to-image and image-to-image / multi-image input
- Video Lab: `agnes-video-v2.0`
- Text-to-video, image-to-video, multi-image, keyframes
- Batch generation (1-4 sequential jobs)
- Prompt presets for cinematic, product, anime, photoreal, reel and epic workflows
- Session-only generation history. API keys are never written to history.
- Async `video_id` polling
- Same-origin server proxy so Agnes secrets never need to be exposed in client-side requests

## Security model
The API key is supplied per operation. It is not stored in localStorage, sessionStorage, cookies, a database, or an environment file. It is forwarded only from a server route to Agnes using `Authorization: Bearer ...`.

History stores only non-secret metadata and output URLs in `sessionStorage`.

## Run
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Notes
Production-critical Agnes limits and model availability can change. The app currently targets the public endpoints documented by Agnes:
- `POST https://apihub.agnes-ai.com/v1/images/generations`
- `POST https://apihub.agnes-ai.com/v1/videos`
- `GET https://apihub.agnes-ai.com/agnesapi?video_id=<VIDEO_ID>`
