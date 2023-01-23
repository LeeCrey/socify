# frozen_string_literal: true

Rails.application.routes.draw do
  root "posts#index"

  resources :posts, except: %i[index]
  devise_for :users
end
