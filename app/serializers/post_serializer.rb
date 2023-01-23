class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :photos
  has_one :user
end
