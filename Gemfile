# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.3"

gem "rails", "~> 7.0.4", ">= 7.0.4.1"

gem "sprockets-rails"

gem "puma", "~> 5.0"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"

gem "jbuilder"
gem "redis", "~> 4.0"
gem "pg", "~> 1.1"
gem "devise"

gem "friendly_id"
gem "will_paginate"
gem "acts_as_votable"
gem "acts_as_commentable"
gem "followable_behaviour"
# gem "acts_as_follower"
gem "counter_culture"
gem "active_model_serializers"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

gem "sassc-rails"
gem "image_processing", "~> 1.2"

group :development, :test do
  gem "debug", platforms: %i[mri mingw x64_mingw]
  gem "faker"
end

group :development do
  gem "web-console"
  gem "figaro"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end
