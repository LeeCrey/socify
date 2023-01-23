# frozen_string_literal: true

class Post < ApplicationRecord
  belongs_to :user
  has_many_attached :photos

  acts_as_votable

  counter_culture :user
end
