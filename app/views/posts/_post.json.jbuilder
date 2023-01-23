json.extract! post, :id, :user_id, :content, :photos, :created_at, :updated_at
json.url post_url(post, format: :json)
json.photos do
  json.array!(post.photos) do |photo|
    json.id photo.id
    json.url url_for(photo)
  end
end
