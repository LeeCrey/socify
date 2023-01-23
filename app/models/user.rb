# frozen_string_literal: true

class User < ApplicationRecord
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  #  R/ships
  has_many_attached :profiles
  has_many :posts, dependent: :destroy

  extend FriendlyId
  friendly_id :name, use: :slugged
  # follower_behaviour
  # followable_behaviour
end
