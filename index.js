curl -n -X POST https://api.heroku.com/apps/example-app/builds \
-d '{"source_blob":{"url":"https://s3-external-1.amazonaws.com/herokusources/...", "version": "cb6999d361a0244753cf89813207ad53ad906a14"}}' \
-H 'Accept: application/vnd.heroku+json; version=3' \
-H "Content-Type: application/json"
{
  "created_at": "2014-04-23T02:47:04+00:00",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "source_blob": {
    "url": "https://s3-external-1.amazonaws.com/herokusources/...",
    "version": "cb6999d361a0244753cf89813207ad53ad906a14"
  },
  "slug": {
    "id": null
  },
  "status": "pending",
  "updated_at": "2014-04-23T02:47:11+00:00",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}